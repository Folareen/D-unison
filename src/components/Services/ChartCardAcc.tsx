import { useState } from "react";
import Chart from "react-apexcharts";

const ChartCardAcc = ({ nill }) => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
        stacked: true,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],

        labels: {
          style: {
            colors: ["#000"], // X-axis label color
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["#000"], // Y-axis label color
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: [
          "#008FFB",
          "#00E396",
          "#6B46C1",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#00D474",
        ],
      },

      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
    },
    series: [
      {
        data: [4000, 1000, 2000, 3000, 4000, 5000, 6000],
      },
      {
        data: [6000, 6000, 6000, 6000, 6000, 6000, 6000],
      },
    ],
  });
  return (
    <div className="chart-acc-card-box">
      <div className="top-cht-tst flex justify-between">
        <div className="lsef-row-txt">
          <div className="lft-tstx">Income in the Last Week</div>
          <div className={`profit-percent ${nill}`}>+3.15%</div>
        </div>
        <div className={`rgt-tstx-c ${nill}`}>See statistics for all time</div>
      </div>

      <Chart options={state.options} series={state.series} type="bar" />
    </div>
  );
};

export default ChartCardAcc;
