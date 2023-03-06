import React, { useState } from "react";
import DashboardData from "./DashboardData";
import DashboardUI from "./DashboardUI";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted")

    const response = DashboardData(input);

    if(response.length < 1) {
      setError("There's no data for this food!")
    } else {
      setData(response);
    }
  }

  return <DashboardUI data={data} logout={logout} error={error} handleSubmit={handleSubmit} handleChange={handleChange} />;
}