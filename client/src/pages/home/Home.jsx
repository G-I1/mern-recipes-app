import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { RecipeCard, MiniRecipeCard } from "../../components/exports.js";
import "./home.css";
import { useCookies } from "react-cookie";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(null);
  const [recipeId,setRecipeId] = useState(null);
  const [cookies,_] = useCookies(["access_token"]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:5010/recipes");
        setRecipes(res.data);
      } catch (error) {
        return console.log("error", error);
      }
    };
    fetchRecipes();
  }, []);

  const handleCard = (cardRank) => {
    setClickedCardId(cardRank);
  };

  const handleClose = () => {
    setClickedCardId(null);
  };

  const handleFavorites = async (id)=>{
    setRecipeId(id);
    try {
      await axios.put("http://localhost:5010/recipes",{
        recipeId : id,
        userId : window.localStorage.getItem("userId")
      },
      {
        headers: {
          authorization: cookies.access_token,
        },
      }
      )
      return console.log("added to favorites");
    } catch (error) {
      console.log("error", error)
    }

  }

  return (
    <div className="home-container">
      <h2>Recipes</h2>
      <Suspense>
        <div className="cards-container ">
          {recipes.map((recipe, idx) =>
            !(idx === clickedCardId) ? (
              <div >
                <MiniRecipeCard
                  key={idx}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  cookTime={recipe.cookTime}
                  kitchen={recipe.kitchen}
                  picture={recipe.imageUrl}
                  handleCard={() => handleCard(idx)}
                  handleFavorites = {()=>handleFavorites(recipe._id)}
                />
              </div>
            ) : (
              <div
                className="big-card flip-vertical-left"
                style={{
                  border: "solid black 2px",
                  borderRadius: "25px",
                  padding: "1rem",
                }}
              >
                <RecipeCard
                  key={idx}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  directions={recipe.directions}
                  servings={recipe.servings}
                  prepTime={recipe.prepTime}
                  cookTime={recipe.cookTime}
                  kitchen={recipe.kitchen}
                  handleClose={handleClose}
                  handleFavorites = {()=>handleFavorites(recipe._id)}
                />
              </div>
            )
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
