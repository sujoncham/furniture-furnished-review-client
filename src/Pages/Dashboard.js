import React from "react";
import AreaChartMoth from "../MyChart/AreaChartMoth";
import LineChartMonth from "../MyChart/LineChartMonth";
import MonthBarChart from "../MyChart/MonthBarChart";
import PieChartMonth from "../MyChart/PieChartMonth";
import "./pages.css";

const Dashboard = () => {
  return (
    <div className="board-container">
      <h1>Dashboard</h1>

      <div className="chart">
        <div className="chart-item">
          <LineChartMonth></LineChartMonth>
        </div>
        <div className="chart-item">
          <PieChartMonth></PieChartMonth>
        </div>
        <div className="chart-item">
          <MonthBarChart></MonthBarChart>
        </div>
        <div className="chart-item">
          <AreaChartMoth></AreaChartMoth>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
