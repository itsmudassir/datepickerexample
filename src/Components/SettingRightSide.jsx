import React, { useState } from "react";
import Btn from "./Button";

import SettingIntegration from "./SettingIntegrations";
import SettingTeam from "./SettingTeam";
import SettingWorkspace from "./SettingWorkspace";
function SettingRightSide(props) {
  const [buttonValue, setButtonValue] = useState("0");
  var firstbtnclass = true;
  var secondbtnclass = false;
  var thirdbtnclass = false;
  function handleInput(e) {
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
      <Btn
        id={firstbtnclass ? "new-clickedsetting-class" : "null"}
        class="setting-btn-1"
        textclass="setting-btn-text"
        name="workspace name"
        btnvalue="0"
        clickbtn={handleInput}
      />
      <Btn
        id={secondbtnclass ? "new-clickedsetting-class" : "null"}
        class="setting-btn-2"
        textclass="setting-btn-text"
        name="team"
        btnvalue="1"
        clickbtn={handleInput}
      />
      <Btn
        id={thirdbtnclass ? "new-clickedsetting-class" : "null"}
        class="setting-btn-3"
        textclass="setting-btn-text"
        name="integration"
        btnvalue="2"
        clickbtn={handleInput}
      />
      {buttonValue === "0" && <SettingWorkspace />}
      {buttonValue === "1" && <SettingTeam />}
      {buttonValue === "2" && <SettingIntegration />}
    </div>
  );
}

export default SettingRightSide;
//<IntegrationRow />
//<SettingTeam />
/*{(buttonValue = 0 && <SettingWorkspace />)}
{(buttonValue = 1 && <SettingWorkspace />)}
{(buttonValue = 2 && <SettingTeam />)} */
