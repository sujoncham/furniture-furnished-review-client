import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid, Tooltip,
  XAxis,
  YAxis
} from "recharts";

const MyChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 44500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 300010,
    },
    {
      month: "Jun",
      investment: 400000,
      sell: 529,
      revenue: 300405,
    },
    {
      month: "Jul",
      investment: 500000,
      sell: 601,
      revenue: 200900,
    },
    {
      month: "Aug",
      investment: 400000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <AreaChart
      width={380}
      height={350}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="revenue"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="investment"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default MyChart;
