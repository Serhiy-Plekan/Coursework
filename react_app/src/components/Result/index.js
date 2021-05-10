import React from "react";
import "./index.scss";
import Chart from "react-apexcharts";

const Result = ({ serverData, selectedMethod }) => {
  const series = [
    {
      name: "user data",
      data: serverData.data,
    },
    {
      name: selectedMethod,
      data: serverData[selectedMethod],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 5],
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    yaxis: {
      decimalsInFloat: 2,
    },
    markers: {
      size: [7, 0]
    }
  };

  return <Chart options={options} series={series} height={350} />;
};

export default Result;
