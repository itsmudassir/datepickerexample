import React from "react";

function Text(props) {
  return <p className={props.class}>{props.name}</p>;
}

export default Text;
