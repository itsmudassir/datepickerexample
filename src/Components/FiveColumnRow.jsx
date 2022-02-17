import React from "react";

function FiveColumnRow(props) {
  return (
    <div className="row row-event-padding">
      <div className={props.class5colrow}>{props.col1}</div>
      <div className={props.class5colrow1}>{props.col2}</div>
      <div className={props.class5colrow1}>{props.col3}</div>
      <div className={props.class5colrow1}>{props.col4}</div>
      <div className={props.class5colrow1}>{props.col5}</div>
    </div>
  );
}

export default FiveColumnRow;
