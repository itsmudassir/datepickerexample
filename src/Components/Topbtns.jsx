import React from "react";

function Topbtns(props) {
  return (
    <button
      type="button"
      id={props.id}
      className={props.class}
      onClick={props.clickbtn}
      value={props.value}
    >
      {props.name}
    </button>
  );
}

export default Topbtns;
