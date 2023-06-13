import express from "express";
import { RecipeController } from "../controllers/recipe.controller.js";
import { UserController } from "../controllers/users.controller.js";

const router = express.Router();
const recipeController = new RecipeController;
const userController = new UserController;

router.post("/",userController.verifyToken,recipeController.addRecipe);
router.get("/",recipeController.getRecipe);
router.put("/",userController.verifyToken,recipeController.addFavRecipe);
router.post("/saved-recipes",userController.verifyToken,recipeController.getFavRecipes);

export {router as recipeRouter};