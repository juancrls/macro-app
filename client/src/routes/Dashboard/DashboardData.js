import { useFetch } from "../../hooks/useFetch";

export default function DashboardData() {
  const {
    data: foodNutritionalData,
    isFetching,
    error,
  } = useFetch("https://api.api-ninjas.com/v1/nutrition?query=" + "1g cooked rice, 5 boiled eggs", { "X-Api-Key": process.env.REACT_APP_NUTRITION_API_KEY });

  return {
    foodNutritionalData,
    isFetching,
    error,
  };
}