import React, { useState } from "react";
import "../Card.scss";
import ColumnBarChart from "../../Charts/ColumnBarChart/ColumnBarChart";
import Button from "../../Button/Button";

export default function NutritionalFacts(props) {
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

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

  const options = {};
  const data = {
    labels: [`${name} | ${calories} calories`],
    datasets: [
      {
        label: "Carbohydrates",
        data: [carbohydrates_total_g],
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Saturated Fat",
        data: [fat_saturated_g],
        backgroundColor: "orange",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Total Fat",
        data: [fat_total_g],
        backgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Fiber",
        data: [fiber_g],
        backgroundColor: "lime",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Protein",
        data: [protein_g],
        backgroundColor: "purple",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Sugar",
        data: [sugar_g],
        backgroundColor: "pink",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
        <div className={`card ${!showContent ? "card_hidden" : ""}`}>
          {showContent && <ColumnBarChart chartData={data} options={options} />}
          {!showContent && <span className="card_reduced-info">{name} | {calories} calories</span>}
          <Button
            onClick={toggleContent}
            content={showContent ? "HIDE" : "SHOW"}
            size="s"
            theme="show-hide-button"
          />
        </div>
    </>
  );
}
