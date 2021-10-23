import React from "react";

import { SemiCircleChartProps } from "./semi-circle-chart.types";

import "./semi-circle-chart.style.scss";

class SemiCircleChartComponent extends React.Component<SemiCircleChartProps> {
  render() {
    const mystyle = {
      "--percentage": this.props.percentage,
      "--fill": this.props.colourFill,
    } as React.CSSProperties;
    return (
      <>
        <div className="semi-donut margin" style={mystyle}></div>
        <div>2 Days to Go</div>
      </>
    );
  }
}
export default SemiCircleChartComponent;
