import express from "express";
import cors from "cors"; 
import dotenv from "dotenv"; 
import { dbconnect } from "./config/db.config.js";
import { userRouter } from "./routes/user.router.js";
import {recipeRouter} from "./routes/recipe.router.js";

dotenv.config();
const port = process.env.PORT || 5000 ;
const app = express();

app.use(express.json());
app.use(cors({
    origin : "*",
    credentials : true
}));

app.use("/auth",userRouter);
app.use("/recipes",recipeRouter);

dbconnect(process.env.DB_URI);



app.listen(port ,()=> console.log(`server listening on port : ${port}`));


