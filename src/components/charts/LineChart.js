/**
 * ************************************
 *
 * @module  LineChart.js
 * @description React-chart-js Line Chart component that can be used to display metrics about objects in the K8s cluster
 *
 * ************************************
 */

import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const data = {
    labels: props.xAxis,
    datasets: props.datasets
  };

  const options = {
    scales: {
      y:  {
            beginAtZero: true,
          }
      }
    };

  return (
    <>
      <h1 className="title">{props.metricName}</h1>
      <div className="lineChart">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default LineChart;
