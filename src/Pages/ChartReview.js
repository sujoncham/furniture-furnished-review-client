import AreaChartMoth from "../MyChart/AreaChartMoth";
import LineChartMonth from "../MyChart/LineChartMonth";
import MonthBarChart from "../MyChart/MonthBarChart";
import PieChartMonth from "../MyChart/PieChartMonth";
import "./pages.css";

const ChartReview = () => {
  return (
    <div className="container mb-5">
      <h1 className="mt-5 mb-5 text-center text-warning">Monthly Review Charts</h1>

      <div className="row">
        <div className="col-md-6">
          <h2 className="text-warning">Monthly Sell</h2>
          <LineChartMonth></LineChartMonth>
        </div>
        <div className="col-md-6">
        <h2 className="text-warning">Monthly Revenue</h2>
          <PieChartMonth></PieChartMonth>
        </div>
        <div className="col-md-6">
        <h2 className="text-warning">Investment & Revenue</h2>
          <MonthBarChart></MonthBarChart>
        </div>
        <div className="col-md-6">
        <h2 className="text-warning">Sell & Revenue</h2>
          <AreaChartMoth></AreaChartMoth>
        </div>
      </div>
    </div>
  );
};

export default ChartReview;
