import React from "react";
import Button from "../../components/Button/Button";
import "./Dashboard.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function DashboardUI({ data, logout }) {
  const { repositories, isFetching, error } = data;

  return (
    <>
      <div className="dashboard">
        Dashboard
        <Logo />
        <Button content="Logout" onClick={logout} />
        {isFetching && <p>Carregando...</p>}
        {error && (
          <>
            <strong>There's a error on the request! See below</strong>
            <p>{error}</p>
          </>
        )}
        <ul>
          {repositories.map((repo) => {
            return (
              <li key={repo.full_name}>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
