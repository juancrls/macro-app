import React from "react";
import DashboardData from "./DashboardData";
import DashboardUI from "./DashboardUI";
import { useAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const data = DashboardData();

  return <DashboardUI data={data} logout={logout} />;
}