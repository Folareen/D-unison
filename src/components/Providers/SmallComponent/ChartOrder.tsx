import Chart from "react-apexcharts";
import { HiDotsVertical } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: HiDotsVertical,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  //   {
  //     title: "Revenue",
  //     color: {
  //       backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
  //       boxShadow: "0px 10px 20px 0px #FDC0C7",
  //     },
  //     barValue: 80,
  //     value: "14,270",
  //     png: HiDotsVertical,
  //     series: [
  //       {
  //         name: "Revenue",
  //         data: [10, 100, 50, 70, 80, 30, 40],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Expenses",
  //     color: {
  //       backGround:
  //         "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
  //       boxShadow: "0px 10px 20px 0px #F9D59B",
  //     },
  //     barValue: 60,
  //     value: "4,270",
  //     png: HiDotsVertical,
  //     series: [
  //       {
  //         name: "Expenses",
  //         data: [10, 25, 15, 30, 12, 15, 20],
  //       },
  //     ],
  //   },
];
const allSeries = cardsData.map((card) => ({
  name: card.title,
  data: card.series[0].data, // Assuming each card has only one series
}));

const ChartOrder = () => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#6EC8EF",
        opacity: 0.35,
      },

      fill: {
        colors: ["#6EC8EF"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "category", // Use category type for day labels
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      yaxis: {
        show: true,
      },
    },
  };
  return (
    <div className="pie-card-container ">
      <div className="pie-bx-flx flex justify-between">
        <h6>
          <b>Chart Order</b>
        </h6>
        <button className="btnrept">
          {" "}
          <FiDownload />
          Download report
        </button>
      </div>
      <div className="chartContainer">
        <Chart options={data.options} series={allSeries} type="area" />
      </div>
    </div>
  );
};

export default ChartOrder;
