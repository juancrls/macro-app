import React, { useEffect, useRef } from "react";
import "./ColumnBarChart.scss";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ColumnBarChart({ chartData, options }) {
  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
}
