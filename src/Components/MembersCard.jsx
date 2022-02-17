import React from "react";
import Topbtns from "./Topbtns";
//import MembersCardAbout from "./MemberCardAbout";
//import MembersCardNotes from "./MemberCardNotes";
import MembersCardReport from "./MemberCardReport";
function MembersCard(props) {
  return (
    <div>
      <img
        src={require("./user-image.png")}
        alt="poli"
        className="member-image"
      />
      <h1 className="member-name">Megha</h1>
      <Topbtns class="membercard-btntext membercard-btn1" name="About" />
      <Topbtns class="membercard-btntext membercard-btn2" name="Report" />
      <Topbtns class="membercard-btntext membercard-btn3" name="Activites" />
      <Topbtns class="membercard-btntext membercard-btn4" name="Notes" />
      <Topbtns
        class="membercard-close-btn"
        name={<img src={require("./x.png")} alt="poli" className="x-image" />}
      />
      <MembersCardReport />
    </div>
  );
}

export default MembersCard;
//<MembersCardAbout />
//<MembersCardNotes />
