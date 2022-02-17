import React from "react";
import Text from "./Text";
function SettingWorkspace() {
  return (
    <div className="RightSide-Box-settings">
      <Text class="setting-workspace-name" name="Workspace : Workspace_Name" />
      <Text class="setting-workspace-edit-name" name="Edit Workspace Name" />
      <div className="form-group">
        <input
          type="text"
          className="form-control edit-workspace-imput"
          placeholder="Name"
        />
      </div>

      <button type="submit" className="btn btn-primary workspace-editname-btn">
        Submit
      </button>
    </div>
  );
}

export default SettingWorkspace;
