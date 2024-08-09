import React from "react";
import RecipePopUp from "./RecipePopUp";

export default function CardContainer(props) {
  const [showRecipe, setShowRecipe] = React.useState(false);
  const [currentMealId, setCurrentMealId] = React.useState(null);
  const meals = props.result?.meals || [];
  
  function showDetails(id) {
    setShowRecipe((prev) => !prev);
    setCurrentMealId(id);
  }

  React.useEffect(() => {
    if (showRecipe) {
      document.querySelector("body").classList.add("dim");
    } else {
      document.querySelector("body").classList.remove("dim");
    }
  }, [showRecipe]);

  return (
    <div className="card-container">
      {meals.length > 0 ? (
        meals.map((item) => (
          <div className="card" key={item.idMeal}>
            <div>
              <img src={item.strMealThumb} alt={item.strMeal} />
            </div>
            <div>
              <h2>{item.strMeal}</h2>
              <a
                className="see-details"
                onClick={() => showDetails(item.idMeal)}
              >
                See details
              </a>
            </div>
          </div>
        ))
      )  : (
        <p>No meals available</p>
      )}
      {showRecipe && (
        <RecipePopUp
          className={showRecipe}
          meals={currentMealId}
          setShowRecipe={setShowRecipe}
        />
      )}
    </div>
  );
}
