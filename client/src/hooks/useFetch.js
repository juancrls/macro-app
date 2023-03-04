import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      })
  })

  return { data, isFetching, error }
}