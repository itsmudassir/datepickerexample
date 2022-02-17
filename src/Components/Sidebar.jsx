import React from "react";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <h1 className="poli">Poli</h1>
      <img
        src={require("./Poli-image.png")}
        alt="poli"
        className="Poli-image"
      />
      <button
        id={props.id1}
        type="button"
        className="first-sidebtn sidebtn-text"
        value="0"
        onClick={props.clickBtn}
      >
        <img
          src={require("./Report-image.png")}
          alt="poli"
          className="sidebar-image"
        />
        Reports
      </button>

      <button
        id={props.id2}
        type="button"
        className="second-sidebtn sidebtn-text"
        value="1"
        onClick={props.clickBtn}
      >
        <img
          src={require("./Members-image.png")}
          alt="poli"
          className="sidebar-image"
        />
        Members
      </button>
      <button
        id={props.id3}
        type="button"
        className="third-sidebtn sidebtn-text"
        value="2"
        onClick={props.clickBtn}
      >
        <img
          src={require("./Setting-image.png")}
          alt="poli"
          className="sidebar-image"
        />
        Settings
      </button>
    </div>
  );
}

export default Sidebar;
