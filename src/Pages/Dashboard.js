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
          <h2>Monthly Sell</h2>
          <LineChartMonth></LineChartMonth>
        </div>
        <div className="chart-item">
        <h2>Monthly Revenue</h2>
          <PieChartMonth></PieChartMonth>
        </div>
        <div className="chart-item">
        <h2>Investment & Revenue</h2>
          <MonthBarChart></MonthBarChart>
        </div>
        <div className="chart-item">
        <h2>Sell & Revenue</h2>
          <AreaChartMoth></AreaChartMoth>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
