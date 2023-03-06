import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

import DashboardUI from "./DashboardUI";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const [input, setInput] = useState("");
  const [data, setData] = useState(() => {
    const persistedData = localStorage.getItem("data");
    return persistedData ? JSON.parse(persistedData) : [];
  });
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(false);

  const makeRequest = () => {
    setIsFetching(true);
  
    axios
      .get("https://api.api-ninjas.com/v1/nutrition?query=" + input, {
        headers: { "X-Api-Key": process.env.REACT_APP_NUTRITION_API_KEY },
      })
      .then((response) => {
        console.log("DATA REQUEST OK | RESPONSE:", response.data);
        const newData = [...data, ...response.data]; // Merge the new data with the existing data
        setData(newData);
        localStorage.setItem("data", JSON.stringify(newData)); // Persist the updated data
      })
      .catch((err) => {
        console.log("DATA REQUEST ERROR | ERROR:", err);
        setError(err);
      })
      .finally(() => {
        console.log("DATA REQUEST DONE");
        setIsFetching(false);
      });
  };
  
  

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(input.trim().length < 1) {
      setError("Insert a valid input!")
      console.log("ERROR - NO INPUT")
    } else {
      makeRequest();
    }
  }

  // memoize the data prop to prevent re-renders when it hasn't changed
  const memoizedData = useMemo(() => data, [data]);

  return <DashboardUI foodNutritionalData={memoizedData} isFetching={isFetching} logout={logout} error={error} handleSubmit={handleSubmit} handleChange={handleChange} />;
}
