import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const MyChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 50401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 84500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 207010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 240405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 350900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 361000,
    },
  ];

  return (
    <BarChart width={550} height={350} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );
};

export default MyChart;
