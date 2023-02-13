import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useHttp from "../../../../components/Hook/Use-http";
import CONSTANT from "../../../Utility/constnt";

const RadialChart = (props) => {
  const {data, totalTrip} = props
  const series = data ? data :[44, 55, 67]  
  console.log('totalTrip',totalTrip)
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
            formatter: function (w) {
              return +totalTrip;
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
