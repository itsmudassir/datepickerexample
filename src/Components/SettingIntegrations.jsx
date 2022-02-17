import React from "react";

import FourColumnRow from "./FourColumnRow";
function SettingIntegration() {
  return (
    <div className="RightSide-Box-settings">
      <div className="setting-team-name">
        <FourColumnRow
          class4colrow="col-lg-3 event-heading-text"
          col1="Workspace"
          col2="Domain"
          col3="Status"
          col4="Action"
        />
        <FourColumnRow
          class4colrow="col-lg-3 eventtext"
          col1="Workspace"
          col2="Domain"
          col3="Status"
          col4="Action"
        />
        <FourColumnRow
          class4colrow="col-lg-3 eventtext"
          col1="Workspace"
          col2="Domain"
          col3="Status"
          col4="Action"
        />
      </div>
      <button type="submit" className="btn btn-primary team-name-btn">
        Add Integration
      </button>
    </div>
  );
}

export default SettingIntegration;
