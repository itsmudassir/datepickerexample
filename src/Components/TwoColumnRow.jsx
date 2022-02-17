import React from "react";

function TwoColumnRow(props) {
  return (
    <div className="row row-event-padding">
      <div className={props.class2colrow}>{props.col1}</div>
      <div className={props.class2colrow1}>{props.col2}</div>
    </div>
  );
}

export default TwoColumnRow;
