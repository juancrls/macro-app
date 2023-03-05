import React from "react";
import "./NutritionalFactsCard.scss"

export default function NutritionalFacts(props) {
  return (
    <>
      {Object.values(props).map((food) => {
        return (
          <div className="card card_nutritional-facts">
            <div className="nutritional-facts-name">
              <span>{food.name}</span>
            </div>
            <ul className="nutricional-facts-list">
              <li className="nutritional-facts-calories">
                <strong>Calories: </strong>
                <span>{food.calories}Kcal</span>
              </li>
              <li className="nutritional-facts-carbohydrates">
                <strong>Carbo: </strong>
                <span>{food.carbohydrates_total_g}g</span>
              </li>
              <li className="nutritional-facts-fat_satured">
                <strong>Saturated Fat: </strong>
                <span>{food.fat_saturated_g}g</span>
              </li>
              <li className="nutritional-facts-fat_total">
                <strong>Total Fat: </strong>
                <span>{food.fat_total_g}g</span>
              </li>
              <li className="nutritional-facts-fiber">
                <strong>Fiber: </strong>
                <span>{food.fiber_g}g</span>
              </li>
              <li className="nutritional-facts-potassium">
                <strong>Potassium: </strong>
                <span>{food.potassium_mg}mg</span>
              </li>
              <li className="nutritional-facts-protein">
                <strong>Protein: </strong>
                <span>{food.protein_g}g</span>
              </li>
              <li className="nutritional-facts-sodim">
                <strong>Sodium: </strong>
                <span>{food.sodium_mg}mg</span>
              </li>
              <li className="nutritional-facts-sugar">
                <strong>Sugar: </strong>
                <span>{food.sugar_g}g</span>
              </li>
              <li className="nutricional-facts-cholesterol">
                <strong>Cholesterol: </strong>
                <span>{food.cholesterol_mg}mg</span>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
