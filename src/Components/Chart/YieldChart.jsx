import React from "react";
import Chart from "react-apexcharts";

class AreaChart extends React.Component {
  static defaultProps = {
    height: 250,
  };

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
            opacityFrom: 0,
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
          height: "250px",
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
            //enabled: true,
          },
        },
        dataLabels: {
          //enabled: false,
        },
        legend: {
          //show: false,
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
          tickAmount: 4,
          min: 0,
          labels: {
            formatter: (value) => (Math.round(value * 100) / 100).toFixed(2),
          },
        },
        grid: {
          //show: false,
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
        height={this.props.height}
        width="100%"
        type="area"
        style={{ width: "100%" }}
      />
    );
  }
}

export default AreaChart;
