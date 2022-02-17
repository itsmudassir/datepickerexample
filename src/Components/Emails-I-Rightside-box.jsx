import React from "react";
import Text from "./Text";
import Btn from "./Button";
import FiveColumnRow from "./FiveColumnRow";

function EventsIRightSideBox() {
  return (
    <div className="RightSide-Box-eventsI">
      <Text class="IntegrationHeading" name="Connect gmail" />
      <Text
        class="intergation-para-I para-text"
        name="conect your community's google form account. Once done start measuring your event analytics including number of registrations for your events."
      />
      <Btn
        class="form-integrate integrate-btn-I"
        textclass="integrate-text"
        name="connect gmail"
      />
      <hr className="ei-horizontal-line-1" />

      <div className="eventrows">
        <FiveColumnRow
          class5colrow="col-4 event-heading-text"
          class5colrow1="col-2 event-heading-text"
          col1="Title"
          col2="Sent Volume"
          col3="Open Rate"
          col4="CTR"
          col5="Bounce Rate"
        />
        <FiveColumnRow
          class5colrow="col-4 eventtext"
          class5colrow1="col-2 eventtext"
          col1="weekly-1"
          col2="100"
          col3="80"
          col4="70"
          col5="60"
        />
        <FiveColumnRow
          class5colrow="col-4 eventtext"
          class5colrow1="col-2 eventtext"
          col1="weekly-1"
          col2="100"
          col3="80"
          col4="70"
          col5="60"
        />
      </div>
    </div>
  );
}

export default EventsIRightSideBox;
