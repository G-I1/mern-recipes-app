import React, { Suspense } from "react";
import { RecipeForm } from "../../components/exports";
import { useCookies } from "react-cookie";
import "./createrecipe.css";

const CreateRecipes = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  return (
    <div className="create_recipe_container">
      <Suspense>
        {(!cookies.access_token ) ? (
          <div className="message">You must be logged in to add recipe</div>
        ) : (
          <RecipeForm />
        )}
      </Suspense>
    </div>
  );
};

export default CreateRecipes;
