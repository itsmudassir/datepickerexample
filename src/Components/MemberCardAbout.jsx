import React from "react";
import Topbtns from "./Topbtns";
function MembersCardAbout(props) {
  return (
    <div>
      <img
        src={require("./Email-send-image.png")}
        alt="poli"
        className="email-send-image"
      />
      <p className="member-email">anotramegha@gmail.com</p>
      <img src={require("./map-pin.png")} alt="poli" className="mappin-image" />
      <p className="member-location">Bangalore, India</p>
      <p className="member-since">
        Members Since : <span className="member-since-date"> megha</span>
      </p>
      <p className="tags">Tags : </p>
      <Topbtns class="assignTag-btn assignTag-btntext" name="+ Assign a Tag" />
    </div>
  );
}

export default MembersCardAbout;
