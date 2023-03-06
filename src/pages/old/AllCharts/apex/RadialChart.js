import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = (props) => {
  const { data = [] } = props;
  const getArray = data ? data.map((e) => e.value) : [];
  const arraySum = getArray.reduce((a, b) => a + b, 0);
  const arrayWithPer = data && data.map((e) => { return { ...e, perValue: (e.value / arraySum * 100) } });


  const series = data ? arrayWithPer.map((e) => e.perValue) : [44, 55, 67]
  const options = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
            formatter: function (val) {
              const data = arrayWithPer.filter((e) => {
                return e.perValue === +val && e.value
              })
              return data[0]?.value
            }
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (e) {
              return arraySum;
            },
          },
        },
      },
    },
    labels: data ? data.map((e) => e.label) : ["Delayed", "On Time", "Early"],
    colors: ["#d63232", "#45cb85", "#3b5de7"],
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
