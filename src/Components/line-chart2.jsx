import React from "react";
import { LineChart } from "react-chartkick";
import "chartkick/chart.js";
function Linechart2(props) {
  return <LineChart data={props.data} />;
}
export default Linechart2;
