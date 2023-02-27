import React from "react";
import ReactApexChart from "react-apexcharts";

const HomeChart1 = (props) => {
  const { data } = props;
  const series = [
    {
      name: "Carbon Emissions",
      data: data.map((e) => e.value),
    },
  ];

  const options = {
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    series: [
      {
        name: "series1",
        data: data.map((e) => e.key),
      },
    ],
    colors: ["#45cb85", "#eeb902"],
    xaxis: {
      categories: data.map((e) => e.key),
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    fill: {
      type: "solid",
      opacity: [0.2, 0.1],
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="350"
        className="apex-charts"
      />
    </div>
  );
};

export default HomeChart1;
