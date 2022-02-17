import React from "react";
import Text from "./Text";
import Btn from "./Button";

function EmailNIRightSideBox() {
  return (
    <div className="RightSide-Box">
      <Text
        class="NoIntegrationHeading"
        name="You have no integrations setup yet"
      />

      <Text
        class="NoIntegrationHeading2 heading-text"
        name="Connect mailchimp account"
      />
      <Text
        class="intergation-para1 para-text"
        name="connect your community's zoom account. Once done, start measuring your event analytics including number of event turnups."
      />
      <Text class="NoIntegrationHeading3 heading-text" name="Connect gmail" />
      <Text
        class="intergation-para2 para-text"
        name="conect your community's google form account. Once done start measuring your event analytics including number of registrations for your events."
      />
      <Btn
        class="zoom-integrate"
        textclass="integrate-text"
        name="connect mailchimp"
      />
      <Btn
        class="form-integrate"
        textclass="integrate-text"
        name="connect gmail "
      />
    </div>
  );
}

export default EmailNIRightSideBox;
