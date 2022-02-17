import React from "react";
import { PieChart } from "react-chartkick";
import "chartkick/chart.js";
function Piechart() {
  return (
    <PieChart
      legend={true}
      donut={true}
      colors={["#5F41B2", "#8369CA", "#C0B7E3", "#D0D2DA"]}
      width="300px"
      height="300px"
      data={[
        ["Most active", 36],
        ["Active", 20],
        ["Partially Active", 19],
        ["Inactive", 25]
      ]}
    />
  );
}
export default Piechart;
