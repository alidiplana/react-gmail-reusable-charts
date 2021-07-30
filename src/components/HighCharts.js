import React from "react";
import Highcharts from "highcharts";

class Donut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Mails",
          data: [
            {
              name: "Archive",
              y: 21.05,
              color: "#800000",
            },
            {
              name: "Labels",
              y: 7.52,
              color: "#2ecc71",
            },
            {
              name: "Drafts",
              y: 5.26,
              color: "#63c5da",
            },
            {
              name: "Trash",
              y: 11.28,
              color: "#A020F0",
            },
            {
              name: "Span",
              y: 4.51,
              color: "#f1c40f",
            },
            {
              name: "Inbox",
              y: 50.38,
              color: "#009dff"
            },
          ],
        },
      ],
    };
  }

  highChartsRender() {
    Highcharts.chart({
      chart: {
        type: "pie",
        renderTo: "atmospheric-composition",
      },
      title: {
        verticalAlign: "middle",
        floating: true,
        text: "Gmail Labels",
        style: {
          fontSize: "10px",
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            format: "{point.name}: {point.percentage:.1f} %",
          },
          innerSize: "70%",
        },
      },
      series: this.state.series,
    });
  }

  componentDidMount() {
    this.highChartsRender();
  }

  render() {
    return <div id="atmospheric-composition"></div>;
  }
}

export default Donut;
