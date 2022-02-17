import React from "react";

function FourColumnRow(props) {
  return (
    <div className="row row-event-padding">
      <div className={props.class4colrow}>{props.col1}</div>
      <div className={props.class4colrow}>{props.col2}</div>
      <div className={props.class4colrow}>{props.col3}</div>
      <div className={props.class4colrow}>{props.col4}</div>
    </div>
  );
}

export default FourColumnRow;
