import styled from "@emotion/styled";
import Image from "next/image";
import Chart from "./chart";
import 'chart.js/auto';
import { Line, Pie } from "react-chartjs-2";

const MainIncomes = function () {
  return <MainIncomesPic></MainIncomesPic>;
};

const MainIncomesPic = function () {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };


  return (
    <Chart>
      <h2>pie chart</h2>
      <Pie data={data} width={400} height={400} />
    </Chart>
  );
};



export default MainIncomes;
