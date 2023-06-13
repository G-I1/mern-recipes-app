import { lazy } from "react";

export const  Register = lazy(()=> import("./register/Register"));
export const  Login = lazy(()=> import("./login/Login"));
export const  Navbar = lazy(()=> import("./navbar/Navbar"));
export const  UserForms = lazy(()=> import( "./userform/UserForm"));
export const  RecipeForm = lazy(()=> import( "./recipeform/RecipeForm"));
export const  RecipeCard = lazy(()=> import( "./recipecard/RecipeCard"));
export const  MiniRecipeCard = lazy(()=> import( "./minirecipecard/MiniRecipeCard"));
 