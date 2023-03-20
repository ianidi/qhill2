import React from "react";
import Chart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
      options: {
        theme: {
          palette:
            props.type === "trade"
              ? "palette10"
              : props.type === "withdraw"
              ? "palette5"
              : "palette1",
        },
        fill: {
          type: "gradient",
          opacity: 0.3,
          gradient: {
            opacityFrom: 1,
            opacityTo: 0,
          },
        },
        chart: {
          //   events: {
          //     mounted: (chart) => {
          //       chart.windowResizeHandler();
          //     },
          //   },
          width: "100%",
          height: "200px",
          toolbar: {
            show: false,
          },
          dropShadow: {
            enabled: true,
            blur: 7,
            opacity: 0.2,
            color: "#2fa8ec",
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          crosshairs: {
            width: 1,
          },
          type: "datetime",
          labels: {
            datetimeUTC: true,
          },
        },
        yaxis: {
          min: 0,
          labels: {
            formatter: (value) => `${value}`, //currency
          },
        },
        grid: {
          show: false,
        },
        tooltip: {
          x: {
            format: "dd MMM yyyy HH:mm",
          },
          style: {
            fontSize: "15px",
            color: "#000",
            fontFamily: undefined,
          },
          fillSeriesColor: false,
        },
      },
    };
  }
  render() {
    if (false) {
      return null;
    }

    const testdata = [
      {
        datetime: "05/06/2014",
        rate: 100,
      },
      {
        datetime: "05/06/2015",
        rate: 200,
      },
      {
        datetime: "05/06/2016",
        rate: 230,
      },
      {
        datetime: "06/07/2016",
        rate: 120,
      },
    ];

    let data = this.state.chartData.map((row) => {
      return { x: row.dt, y: row.rate };
    });

    let series = [
      {
        name: "Value",
        data,
      },
    ];

    return (
      <Chart
        options={this.state.options}
        series={series}
        height="200px"
        width="100%"
        type="area"
        style={{ width: "100%" }}
      />
    );
  }
}

export default AreaChart;
