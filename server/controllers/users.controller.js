import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";

export class UserController {
    register = async (req, res) => {
        try {
          const { username,email,password } = req.body;
          const user = await UserModel.findOne({ username: username });
      
          if (user) {
            return res.json({ message: "User already exists!" });
          }
      
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new UserModel({
            username: username,
            email : email,
            password: hashedPassword,
          });
          await newUser.save();
      
          res.json({ message: "User registred!" });
      
        } catch (error) {
          console.log("failed adding a user", error);
          return res.status(500).send("Internal Server Error");
        }
      }
      login = async (req, res)=>{
        try {
          const {username , password} = req.body;
          if(!username && !password) throw new Error("all fields are required");
          const user = await UserModel.findOne({username : username});
          if(!user) {
             return res.json({message: "User doesn't exist!"});
          }
  
          const isPasswordValid = await bcrypt.compare(password,user.password);
          if(!isPasswordValid){
              return res.json({message : "Username or Password is incorrect!"})
          }
  
          const token = jwt.sign({id : user._id},process.env.TOKEN_SECRET);
          res.json({token : token ,userId : user._id});
        }catch (error) {
          console.log("failed login");
          return res.status(500).send("Internal Server Error");
        }
      }
      verifyToken = (req,res,next)=>{
        const token = req.headers.authorization;
        if(token){
          jwt.verify(
            token,
            process.env.TOKEN_SECRET,
            (err) => {
               if(err) res.sendStatus(403);
               next();
            });
        }else {
          res.sendStatus(401).send("no token");
        }
      
      } 

}