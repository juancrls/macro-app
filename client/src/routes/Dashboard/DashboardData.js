import { useFetch } from "../../hooks/useFetch";

export default function DashboardData(query) {
  const {
    data: foodNutritionalData,
    isFetching,
    error,
  } = useFetch("https://api.api-ninjas.com/v1/nutrition?query=" + query, { "X-Api-Key": process.env.REACT_APP_NUTRITION_API_KEY });

  return {
    foodNutritionalData,
    isFetching,
    error,
  };
}