import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useHttp from "../../../../components/Hook/Use-http";
import CONSTANT from "../../../Utility/constnt";

const RadialChart = () => {
  const series = [44, 55, 67];
  const API_CALL = useHttp();

  useEffect(() => {
    (async () => {
      API_CALL.sendRequest(CONSTANT.API.getAnalysis, analysisDataHandler);
    })();
  }, []);

  const analysisDataHandler = (res) => {
    console.log("getAnalysis", res);
  };

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
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249;
            },
          },
        },
      },
    },
    series: [44, 55, 67, 83],
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
