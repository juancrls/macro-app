import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import NutritionalFactsCard from "../../components/Cards/NutritionalFactsCard/NutritionalFactsCard";
import CaloriesCard from "../../components/Cards/CaloriesCard/CaloriesCard";
import Form from '../../components/Form/Form.js';
import TextArea from '../../components/TextArea/TextArea.js';

export default function DashboardUI({ foodNutritionalData, error, logout, handleSubmit, handleChange }) {
  console.log("food nutr", foodNutritionalData)

  return (
    <>
      <Header />
      <div className="dashboard">
        <section className="days">
          {/* <Button content="Logout" onClick={logout} /> */}
          {/* {isFetching && <p>Carregando...</p>} */}

          {Object.values(foodNutritionalData).map((food) => {
            return <NutritionalFactsCard {...food} />
          })}
        </section>
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
              iconRight={{name: "search", width: 24, height: 24 }}
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
          <CaloriesCard />
        </section>
      </div>
    </>
  );
}