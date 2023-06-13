import React, { Suspense, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./savedrecipes.css";
import dot from "../../assets/dot.png";


const SavedRecipes = () => {
  const [cookies, _] = useCookies(["access_token"]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const uId = window.localStorage.getItem("userId");
  useEffect(() => {
    const options = {
      method : "POST",
      url : "http://localhost:5010/recipes/saved-recipes",
      headers : {
        Authorization : cookies.access_token ,
        'Content-Type': 'application/json'
      },
      data : {"userId": uId}
    }
    const getFavRecipes = async () => {
      try {
        const res = await axios.request(options);
        setSavedRecipes(res.data.savedRecipes);
      } catch (error) {
        return console.log("error", error);
      }
    };
    getFavRecipes();
  }, []);

  console.log(savedRecipes);
  return (
    <div className="saved_recipes_container">
      <Suspense>
        {!cookies.access_token ? (
          <div className="message">
            You must be logged in to see your saved recipes
          </div>
        ) : (<div className="cards-container">
          {
          savedRecipes.map((recipe, idx) =>(
            <div className="cards-container">
            <div className="mini_card-container flip-vertical-right">
            <article>
              <header className="mini_card-header">
                <h2>{recipe.name}</h2>
              </header>
              <div className="mini_card-body">
                <img src={recipe.imageUrl} alt="recipe-image" />
                <div className="mini_card-body-ingredients">
                <p>ingredients :</p>
                {recipe.ingredients.map((ingredient,idx) => (
                  <p key={idx}>
                      <img src={dot} alt="arrow" />
                      {ingredient}
                      </p>
                ))}
                </div>
              </div>
              <footer className="mini_card-footer">
                <div className="mini_card-footer-info">
                  <label htmlFor="kitchen">By :</label>
                  <p id="kitchen">{recipe.kitchen}</p>
                </div>
                <div className="mini_card-footer-info">
                  <label htmlFor="cook-time">cook Time :</label>
                  <p id="cook-time">{recipe.cookTime}</p>
                </div>
              </footer>
            </article>
          </div>
            </div>
        ))
          }
        </div>
      )
        }
      </Suspense>
    </div>
  );
};

export default SavedRecipes;
