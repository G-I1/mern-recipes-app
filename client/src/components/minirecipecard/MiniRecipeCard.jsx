import React from "react";
import "./minirecipecard.css";
import dot from "../../assets/dot.png";
import {AiOutlineHeart,AiOutlineDoubleRight} from "react-icons/ai"

const MiniRecipeCard = ({
  name,
  ingredients,
  cookTime,
  kitchen,
  picture,
  handleCard,
  handleFavorites
}) => {
  return (
    <div className="mini_card-container flip-vertical-right">
      <article>
        <header className="mini_card-header">
          <h2>{name}</h2>
          <button onClick={handleCard}><AiOutlineDoubleRight size={"2rem"}/></button>
        </header>
        <div className="mini_card-body">
          <img src={picture} alt="recipe-image" />
          <div className="mini_card-body-ingredients">
          <p>ingredients :</p>
          {ingredients.map((ingredient,idx) => (
            <p key={idx}>
                <img src={dot} alt="arrow" />
                {ingredient}
                </p>
          ))}
          </div>
          <button><AiOutlineHeart  size={"2rem"} onClick={handleFavorites}/></button>
        </div>
        <footer className="mini_card-footer">
          <div className="mini_card-footer-info">
            <label htmlFor="kitchen">By :</label>
            <p id="kitchen">{kitchen}</p>
          </div>
          <div className="mini_card-footer-info">
            <label htmlFor="cook-time">cook Time :</label>
            <p id="cook-time">{cookTime}</p>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default MiniRecipeCard;
