import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import NutritionalFactsCard from "../../components/Cards/NutritionalFactsCard/NutritionalFactsCard";
import CaloriesCard from "../../components/Cards/CaloriesCard/CaloriesCard";
import Form from "../../components/Form/Form.js";
import TextArea from "../../components/TextArea/TextArea.js";
import { processNutritionData } from "../../utils/processNutritionData";
import Skeleton from "../../components/LoadingIndicators/Skeleton/Skeleton";

export default function DashboardUI({
  foodNutritionalData,
  isFetching,
  error,
  logout,
  handleSubmit,
  handleChange,
  removeObj,
}) {
  const [labelArray, dataArray, totalCalories] = processNutritionData(foodNutritionalData);

  return (
    <>
      <div className="dashboard">
        <div className="days">
          <Header logout={logout}/>
          <section className="card-container">
            {/* {isFetching && <p>Carregando...</p>} */}

            {isFetching ? (
              <Skeleton />
            ) : (
              foodNutritionalData.length > 0 ? (
                Object.values(foodNutritionalData).map((food, index) => {
                  return (
                    <NutritionalFactsCard {...food} data={foodNutritionalData} removeObj={removeObj} key={index}/>
                  );
                })
              ) : (
                <div className="days-section-span-container">
                  <span className="days-section-span">
                    Your food information will appear right here
                  </span>
                </div>
              )
            )}

          </section>
        </div>
        <section className="total-calories">
          <Form onSubmit={handleSubmit} theme="simple" id="query-form">
            <TextArea
              onChange={handleChange}
              id="food-search-input"
              // type={states.login_email_input.type}
              // value={states.login_email_input.value}
              // errorMsg={states.login_email_input.errorMsg}
              size="full-width"
              theme="simple"
              iconRight={{ name: "search", width: 24, height: 24 }}
              placeholder="Type some food information"
            />
            <Button
              form="query-form"
              type="submit"
              content={"Search"}
              size="full-width"
              theme="query-button"
            />
          </Form>
          <CaloriesCard labelArray={labelArray} dataArray={dataArray} totalCalories={totalCalories}/>
        </section>
      </div>
    </>
  );
}
