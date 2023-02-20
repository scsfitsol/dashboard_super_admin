import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = (props) => {
  const { data } = props
  const series = data ? data : [44, 55, 67]
  const options = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (e) {
              let sum = e.globals.initialSeries.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
              });
              return sum;
            },
          },
        },
      },
    },
    labels: ["Delayed", "On Time", "Early"],
    colors: ["#d63232", "#3b5de7", "#45cb85"],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height="370"
      className="apex-charts"
    />
  );
};

export default RadialChart;
