import React from "react";

function Btn(props) {
  return (
    <div>
      <button
        id={props.id}
        type="button"
        className={props.class}
        onClick={props.clickbtn}
        value={props.btnvalue}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Btn;
