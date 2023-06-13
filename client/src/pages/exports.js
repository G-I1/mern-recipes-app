import { lazy } from "react";

export const Home = lazy(()=>import("./home/Home"));
export const CreateRecipes = lazy(()=>import("./create-recipe/CreateRecipes"));
export const SavedRecipes = lazy(()=>import( "./saved-recipes/SavedRecipes"));
export const Auth = lazy(()=>import( "./auth/Auth"));