import React from "react";
import Topbtns from "./Topbtns";
function MembersCardNotes(props) {
  return (
    <div>
      <p className="Notes-heading">Notes</p>

      <p className="member-objective">member-objective</p>
      <div className="form-group">
        <input
          type="text"
          className="form-control member-objective-input"
          placeholder="member-objective-input"
        />
      </div>

      <p className="pain-points">pain-points</p>
      <div className="form-group">
        <input
          type="text"
          className="form-control pain-point-input"
          placeholder="pain-point-input"
        />
      </div>

      <p className="additional-comments">additional comments</p>
      <div className="form-group">
        <input
          type="text"
          className="form-control additional-comments-input"
          placeholder="additional-comments-input"
        />
      </div>
      <Topbtns class="setreminder-btn " name="+ Set a reminder to connect" />
    </div>
  );
}

export default MembersCardNotes;
