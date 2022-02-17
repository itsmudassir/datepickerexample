import React from "react";

import TwoColumnRow from "./TwoColumnRow";
function SettingTeam() {
  return (
    <div className="RightSide-Box-settings">
      <div className="setting-team-name">
        <TwoColumnRow
          class2colrow="col-4 event-heading-text"
          class2colrow1="col-8 event-heading-text"
          col1="Name"
          col2="Email"
        />
        <TwoColumnRow
          class2colrow="col-4 eventtext"
          class2colrow1="col-8 eventtext"
          col1="Megha"
          col2="megha@gmail.com"
        />
        <TwoColumnRow
          class2colrow="col-4 eventtext"
          class2colrow1="col-8 eventtext"
          col1="Ayush"
          col2="Ayush@gmail.com"
        />
      </div>
      <button type="submit" className="btn btn-primary team-name-btn">
        Add a Teammate
      </button>
    </div>
  );
}

export default SettingTeam;
