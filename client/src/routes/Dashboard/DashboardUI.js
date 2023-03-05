import React from "react";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import NutritionalFactsCard from "../../components/Cards/NutritionalFactsCard/NutritionalFactsCard";

export default function DashboardUI({ data, logout }) {
  const { foodNutritionalData, isFetching, error } = data;

  return (
    <>
      <Header />
      <div className="dashboard">
        <Button content="Logout" onClick={logout} />
        {isFetching && <p>Carregando...</p>}
        <NutritionalFactsCard {...foodNutritionalData} />
      </div>
    </>
  );
}

{
  /* {error && (
          <>
            <strong>There's a error on the request! See below</strong>
            <p>{error}</p>
          </>
        )} */
}
