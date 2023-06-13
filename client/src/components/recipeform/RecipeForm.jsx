import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import "./recipeform.css";

const RecipeForm = () => {
  const navigate = useNavigate();
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [""],
    directions: "",
    servings: 0,
    prepTime: 0,
    cookTime: 0,
    kitchen: "",
    userOwner: "",
  });

  const [cookies, _] = useCookies(["access_token"]);

  const handleChange = (e) => {
    const { name, value, scrollHeight } = e.target;
    setTextareaHeight(scrollHeight + "px");
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const delIngredient = (idx) => {
    if(recipe.ingredients.length > 1){
      setRecipe((prevRecipe)=>{
        const updatedIngredients = prevRecipe.ingredients.filter((_,index)=> index !== idx);
        return {...prevRecipe,ingredients: updatedIngredients}
      })
    }else {        
        setRecipe((prevRecipe)=>{
          prevRecipe.ingredients[0] = "";
          return {...prevRecipe}
        });
    }
    

  };

  const handleIngredientChange = (evt, index) => {
    const { value } = evt.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients: ingredients });
  };

  const handleSubmilt = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5010/recipes",
        {
          ...recipe,
          userOwner: window.localStorage.getItem("userId"),
        },
        {
          headers: {
            Authorization: cookies.access_token,
          },
        }
      );
      navigate("/");
      return console.log("added recipe");
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div className="recipe_form-continer">
      <form onSubmit={handleSubmilt} className="recipe_form">
        <div className="recipe_form-header">
          <p className="title">recipe</p>
          <div className="recipe-header-infos">
            <div className="recipe-header-info">
              <label htmlFor="name">name</label>
              <input type="text" name="name" id="name" onChange={handleChange}/>
            </div>
            <div className="recipe-header-info">
              <label htmlFor="servings">servings</label>
              <input type="number" name="servings" id="servings" onChange={handleChange}/>
            </div>
            <div className="recipe-header-info">
              <label htmlFor="prepTime">prep time</label>
              <input type="number" name="prepTime" id="prepTime" onChange={handleChange}/>
            </div>
            <div className="recipe-header-info">
              <label htmlFor="cookTime">cook time</label>
              <input type="number" name="cookTime" id="cookTime" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className="recipe_form-body">
          <div className="recipe-body-infos">
            <div className="recipe-body-info">
              <label htmlFor="ingredients">ingredients</label>
              <ul className="indredients-list" id="ingredients">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li className="indredients-list-items" key={idx}>
                    <input
                      id={`ingredient-${idx}`}
                      type="text"
                      name="ingredients"
                      onChange={(evt) => handleIngredientChange(evt, idx)}
                      value={ingredient}
                    />
                    <AiOutlineMinusCircle
                      className="button-icon"
                      onClick={() => delIngredient(idx)}
                    />
                    <AiOutlinePlusCircle
                      className="button-icon"
                      onClick={addIngredient}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="recipe-body-info">
              <label htmlFor="directions">directions</label>
              <textarea
                type="text"
                name="directions"
                id="directions"
                style={{ height: textareaHeight }}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="recipe_form-footer">
          <div className="recipe-footer-infos">
            <div className="recipe-footer-info">
              <label htmlFor="kitchen">from the kitchen/user</label>
              <input type="text" id="kitchen" name="kitchen" onChange={handleChange} />
            </div>
            <div className="recipe-footer-info">
              <label htmlFor="image-url">add image url</label>
              <input type="text" id="image-url" name="imageUrl" onChange={handleChange} />
            </div>
            <button type="submit">add recipe</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
