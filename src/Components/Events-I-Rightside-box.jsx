import React from "react";
import Text from "./Text";
import Btn from "./Button";
import FourColumnRow from "./FourColumnRow";

function EventsIRightSideBox() {
  return (
    <div className="RightSide-Box-eventsI">
      <Text class="IntegrationHeading" name="Connect google forms" />
      <Text
        class="intergation-para-I para-text"
        name="conect your community's google form account. Once done start measuring your event analytics including number of registrations for your events."
      />
      <Btn
        class="form-integrate integrate-btn-I"
        textclass="integrate-text"
        name="connect forms"
      />
      <hr className="ei-horizontal-line-1" />

      <div className="eventrows">
        <FourColumnRow
          class4colrow="col-lg-3 event-heading-text"
          col1="events"
          col2="resgistrations"
          col3="turnups"
          col4="member list"
        />
        <FourColumnRow
          class4colrow="col-lg-3 eventtext"
          col1="event1"
          col2="not available"
          col3="20%"
          col4="megha"
        />
        <FourColumnRow
          class4colrow="col-lg-3 eventtext"
          col1="event2"
          col2="not available"
          col3="20%"
          col4="megha"
        />
      </div>
    </div>
  );
}

export default EventsIRightSideBox;
