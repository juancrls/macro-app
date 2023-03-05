import { useFetch } from "../../hooks/useFetch";

export default function DashboardData() {
  const {
    data: repositories,
    isFetching,
    error,
  } = useFetch("https://api.github.com/users/juancrls/repos");

  return {
    repositories,
    isFetching,
    error,
  };
}