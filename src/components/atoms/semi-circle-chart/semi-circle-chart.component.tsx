import React, { JSX } from "react";
import { SemiCircleChartProps } from "./semi-circle-chart.types";
import "./semi-circle-chart.style.scss";

export default function SemiCircleChartComponent(
  props: SemiCircleChartProps
): JSX.Element {
  const mystyle = {
    "--percentage": props.percentage,
    "--fill": props.colourFill,
  } as React.CSSProperties;
  return (
    <div className="semi-donut" style={mystyle}>
      <div className="semi-donut-text" data-testid="SemiCircleChartText">
        {props.text}
      </div>
    </div>
  );
}
