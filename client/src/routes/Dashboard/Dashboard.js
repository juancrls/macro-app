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
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const makeRequest = () => {
    setIsFetching(true);
    // console.log("DATA REQUEST INPUT:", input);

    axios
      .get("https://api.api-ninjas.com/v1/nutrition?query=" + input, {
        headers: { "X-Api-Key": "wytvQ2l//Mgm+lSkaJQfuQ==epvMuuw8U9sTJPn2" },
        // headers: { "X-Api-Key": process.env.REACT_APP_NUTRITION_API_KEY },
      })
      .then((response) => {
        // console.log("DATA REQUEST OK | RESPONSE:", response.data);
        const newData = [...data, ...response.data]; // Merge the new data with the existing data
        
        if(newData.length > 10) { // Limit the array to have only 10 foods
          newData.length = 8;
        
        }
        setData(newData);
      })
      .catch((err) => {
        // console.log("DATA REQUEST ERROR | ERROR:", err);
        setError(err);
      })
      .finally(() => {
        // console.log("DATA REQUEST DONE");
        setIsFetching(false);
      });
  };
  
  const removeObj = (index) => {
    data.splice(index, 1);
    const newData = [...data]
    setData(newData)
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data)); // Persist the updated data
  }, [data])

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(input.trim().length < 1) {
      setError("Insert a valid input!")
    } else {
      makeRequest();
    }
  }

  // add a index for each object so we can remove using a button
  data.forEach((obj, ind) => {
    obj.id = ind;
  })

  // memoize the data prop to prevent re-renders when it hasn't changed
  const memoizedData = useMemo(() => data, [data]);

  return <DashboardUI foodNutritionalData={memoizedData} isFetching={isFetching} logout={logout} error={error} handleSubmit={handleSubmit} handleChange={handleChange} removeObj={removeObj} />;
}