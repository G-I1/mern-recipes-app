import {RecipeModel} from "../models/recipe.model.js";
import {UserModel} from "../models/user.model.js";


export class RecipeController {
    getRecipe = async(req,res)=>{
        try {
            const recipes = await RecipeModel.find({});
            res.json(recipes);
            
        } catch (error) {
            console.log("failed to add recipe",error);
             return res.status(500).send('Internal Server Error');
        }
    }

    addRecipe = async(req,res) =>{
        try {
            const recipe = req.body;
            await RecipeModel.create(recipe); 
            res.json({message: "added recipe"});
            
        } catch (error) {
             console.log("failed to add recipe",error);
             return res.status(500).send('Internal Server Error');
        }
    }

    addFavRecipe = async(req,res)=>{
        try {
            const recipe = await RecipeModel.findById(req.body.recipeId);
            const user = await UserModel.findById(req.body.userId);

            await user.savedRecipes.push(recipe);
            await user.save();
            
            res.json({message : "added to favorites"});
            
        } catch (error) {
            console.log("failed saving user recipe",error);
            return res.status(500).send('Internal Server Error');
        }
    }

    getFavRecipes = async (req,res)=>{
        try {
            const user = await UserModel.findById(req.body.userId);
            const savedRecipes = await RecipeModel.find(
                {
                    _id : {$in : user.savedRecipes}
                })
            res.json({savedRecipes});
        } catch (error) {
            console.log("failed to add recipe",error);
            return res.status(500).send('Internal Server Error');
        }
    }
}