import styled from "@emotion/styled";
import Chart from "./chart";
import 'chart.js/auto';
import { Line, Pie } from "react-chartjs-2";

const PeriodIncomes = function () {
  return <LineChart></LineChart>;
};


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};


const LineChart = function(){
  return (
    <Chart>
      <h2>line chart</h2>
      <Line data={data} />
    </Chart>
  );
};

export default PeriodIncomes;
