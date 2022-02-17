import React from "react";

function CalenderFilter(props) {
  return (
    <div>
      <button
        type="button"
        className="calender-filter"
        onClick={props.calenderOnClick}
      >
        <span className="calender-btn-text">
          To-From
          <img
            src={require("./calender-filter.png")}
            alt="poli"
            className="calender-image"
          />
        </span>
      </button>
    </div>
  );
}

export default CalenderFilter;
