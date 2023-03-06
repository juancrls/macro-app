import React from "react";
import DoughnutChart from "../../Charts/DoughnutChart/DoughnutChart";
import Button from "../../Button/Button";

export default function CaloriesCard({labelArray, dataArray}) {
  const data = {
    labels: labelArray,
    datasets: [
      {
        label: "Quantity in grams (g)",
        data: dataArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        color:"white",
      },
    ],
  };
  return (
    <>
      <div className={`card card_big`}>
        <span className="total-calories-span">TOTAL CALORIES OF THE DAY</span>
        <DoughnutChart chartData={data} />
      </div>
    </>
  );
}
