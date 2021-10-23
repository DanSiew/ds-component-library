import React from "react";

import { DonutChartProps } from "./donut-chart.types";
import "./donut-chart.style.scss";

class DsDonutChartComponent extends React.Component<DonutChartProps> {
  render() {
    return (
      <div data-testid="DonutChart" className="wrapper">
        <svg width="300px" height="300px" viewBox="0 0 42 42" className="donut">
          <circle
            className="donut-hole"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="#fff"
          ></circle>
          <circle
            className="donut-ring"
            cx="21"
            cy="21"
            r="15.91549430918954"
            fill="transparent"
            stroke="#d2d3d4"
            stroke-width="3"
          ></circle>
          {this.props.sortValues.map((value, index) => (
            <circle
              className={["donut-segment", `donut-segment--${index}`].join(" ")}
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke="#d2d3d4"
              stroke-width="3"
              stroke-dasharray={value}
              stroke-dashoffset="25"
            ></circle>
          ))}

          <g className="donut-text donut-text-1">
            <text y="50%" transform="translate(0, 2)">
              <tspan x="50%" text-anchor="middle" className="donut-percent">
                {this.props.percentage}
              </tspan>
            </text>
            <text y="60%" transform="translate(0, 2)">
              <tspan x="50%" text-anchor="middle" className="donut-data">
                3450 widgets
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

export default DsDonutChartComponent;
