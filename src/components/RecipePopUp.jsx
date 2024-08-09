import React, { useEffect } from "react";

export default function RecipePopUp(props) {
  const [instructions, setInstruction] = React.useState("");
  const [ingredient, setIngredient] = React.useState([]);

  useEffect(() => {
    async function getInstruction() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.meals}`
        );
        // console.log(response)
        const data = await response.json();
        // console.log(typeof data);
        //  console.log(data.meals)
        data.meals.map((item) => {
          setInstruction(item.strInstructions);
          let arrIngredients = [];
          for (let i = 1; i <= 20; i++) {
            let ingredient = "strIngredient" + i;
            if (item[ingredient]) {
              arrIngredients.push(item[ingredient]);
            }
          }
          setIngredient(arrIngredients);
        });

        // console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    getInstruction();
  }, [props.meals]);
  return (
    <div className={props.className ? "details" : null}>
      <span
        className="cross"
        onClick={() => props.setShowRecipe((pre) => !pre)}
      >
        X
      </span>
      <h2>Ingredients:</h2>

      {ingredient.map((item, index) => (
        <h3 key={index} className="ingredients">
          {item}
        </h3>
      ))}

      <h2>Instructions:</h2>
      <p>{instructions}</p>
    </div>
  );
}
