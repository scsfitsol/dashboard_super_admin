import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const series = [180, 120];
  const options = {
    labels: ["Allocate", "Free"],
    colors: ["#5b73e8", "#34c38f"],
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: !1,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      height="320"
      className="apex-charts"
    />
  );
};

export default PieChart;
