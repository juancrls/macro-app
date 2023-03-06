import React, { useState } from "react";
import "../Card.scss";
import ColumnBarChart from "../../Charts/ColumnBarChart/ColumnBarChart";
import Button from "../../Button/Button";

export default function NutritionalFacts(props) {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const removeObj = (ind) => {
    props.removeObj(ind);
  }

  
  const {
    name,
    calories,
    carbohydrates_total_g,
    fat_saturated_g,
    fat_total_g,
    fiber_g,
    protein_g,
    sugar_g,
  } = props;

  // console.log("DATA ON NUTRI", props.data)

  const options = {};
  const data = {
    labels: [`${name} | ${calories} calories`],
    datasets: [
      {
        label: "Carbohydrates",
        data: [carbohydrates_total_g],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Saturated Fat",
        data: [fat_saturated_g],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Total Fat",
        data: [fat_total_g],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Fiber",
        data: [fiber_g],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Protein",
        data: [protein_g],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Sugar",
        data: [sugar_g],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
        <div className={`card ${!showContent ? "card_hidden" : ""}`}>
          {showContent && <ColumnBarChart chartData={data} options={options} />}
          {!showContent && <span className="card_reduced-info">{name} | {calories} calories</span>}

          <div className="card_button-container">
            <Button
              onClick={toggleContent}
              content={showContent ? "HIDE" : "SHOW"}
              size="s"
              theme="show-hide-button"
            />
            
          <Button
            onClick={removeObj}
            content={"REMOVE"}
            theme="remove-button"
          />
          </div>

        </div>
    </>
  );
}
