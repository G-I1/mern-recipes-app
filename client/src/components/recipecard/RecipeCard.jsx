import React from "react";
import "./recipecard.css";
import{AiOutlineCloseCircle,AiOutlineHeart} from "react-icons/ai"

const RecipeCard = ({
  name,
  servings,
  prepTime,
  cookTime,
  directions,
  ingredients,
  kitchen,
  handleClose,
  handleFavorites
}) => {
  return (
    <div className="recipe_card-continer">
      <div className="recipe_form">
        <div className="recipe_form-header">
          <p className="title">recipe</p>
          <div className="recipe-header-infos">
            <div className="recipe-header-info">
              <label htmlFor="name">name</label>
              <input type="text" name="name" id="name" value={name} />
            </div>
            <div className="recipe-header-info">
              <label htmlFor="servings">servings</label>
              <input
                type="number"
                name="servings"
                id="servings"
                value={servings}
              />
            </div>
            <div className="recipe-header-info">
              <label htmlFor="prepTime">prep time</label>
              <input
                type="number"
                name="prepTime"
                id="prepTime"
                value={prepTime}
              />
            </div>
            <div className="recipe-header-info">
              <label htmlFor="cookTime">cook time</label>
              <input
                type="number"
                name="cookTime"
                id="cookTime"
                value={cookTime}
              />
            </div>
          </div>
          <div className="recipe-header-control">
              <AiOutlineCloseCircle size={"2rem"} onClick={handleClose}/>
              <AiOutlineHeart size={"2rem"} onClick={handleFavorites}/>
          </div>
        </div>
        <div className="recipe_form-body">
          <div className="recipe-body-infos">
            <div className="recipe-body-info">
              <label htmlFor="ingredients">ingredients</label>
              <ul className="indredients-list" id="ingredients">
                {ingredients.map((ingredient, idx) => (
                  <li className="indredients-list-items" key={idx}>
                    <p>{ingredient}</p>
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
                value={directions}
              />
            </div>
          </div>
        </div>
        <div className="recipe_form-footer">
          <div className="recipe-footer-infos">
            <div className="recipe-footer-info">
              <label htmlFor="kitchen">from the kitchen/user</label>
              <input type="text" id="kitchen" name="kitchen" value={kitchen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
