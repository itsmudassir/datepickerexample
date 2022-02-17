import React, { useState } from "react";
//import NameWorkspace from "./Nameyourworkspace";
import Sidebar from "./Sidebar";
import ReportRightSide from "./ReportRightSide";
import MembersRightSide from "./MembersRightSide";
import SettingRightSide from "./SettingRightSide";
import IntegrationPage from "./IntegrationPage";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [buttonValue, setButtonValue] = useState("0");
  const [isNew, setisNew] = useState(false);

  var firstbtnclass = true;
  var secondbtnclass = false;
  var thirdbtnclass = false;

  function handleInput(e) {
    console.log(e.target.value);
    setButtonValue(e.target.value);
  }

  if (buttonValue === "0") {
    firstbtnclass = true;
    secondbtnclass = false;
    thirdbtnclass = false;
  } else if (buttonValue === "1") {
    firstbtnclass = false;
    secondbtnclass = true;
    thirdbtnclass = false;
  } else {
    firstbtnclass = false;
    secondbtnclass = false;
    thirdbtnclass = true;
  }
  return (
    <div>
      {isNew && <IntegrationPage />}
      {!isNew && (
        <div>
          <img
            src={require("./user-image.png")}
            alt="poli"
            className="account-image"
          />

          <DropdownButton id="dropdown-basic-button" title="me">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <Sidebar
            clickBtn={handleInput}
            value_first="0"
            value_second="1"
            value_third="2"
            id1={firstbtnclass ? "new-clickedrightsie-class" : "null"}
            id2={secondbtnclass ? "new-clickedrightsie-class" : "null"}
            id3={thirdbtnclass ? "new-clickedrightsie-class" : "null"}
          />
          {buttonValue === "0" && <ReportRightSide />}
          {buttonValue === "1" && <MembersRightSide />}
          {buttonValue === "2" && <SettingRightSide />}
        </div>
      )}
    </div>
  );
}

export default App;
//<ReportRightSide />
//<MembersRightSide />
//<SettingRightSide />
//<NameWorkspace />
//<IntegrationPage />
/* 
<SettingRightSide />
      */
