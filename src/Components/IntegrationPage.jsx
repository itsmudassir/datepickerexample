import React from "react";
import Btn from "./Button";
function IntegrationPage(props) {
  return (
    <div>
      <h1 className="poli poli-integration">Poli</h1>
      <img
        src={require("./Poli-image.png")}
        alt="poli"
        className="Poli-image"
      />

      <p className="choose-integration-paratop">
        {" "}
        Your workspace has been created. Choose from any of the following
        options to import data into this workspace.
        <br />
        One integrated, you will start receving the key engagement insights from
        put team on your preferred source of sommunication
      </p>

      <div className="choose-slack-integration">
        <img
          src={require("./slack-image.png")}
          alt="poli"
          className="channel-image"
        />
        <p className="chosse-channel-integration-para">
          connect your community's slack workspace
        </p>
        <Btn class="choose-integration-btn" name="connect slack" />
      </div>

      <div className="choose-discord-integration">
        <img
          src={require("./discord-image.png")}
          alt="poli"
          className="channel-image"
        />
        <p className="chosse-channel-integration-para">
          connect your community's slack workspace
        </p>
        <Btn class="choose-integration-btn" name="connect discord" />
      </div>

      <div className="choose-twitter-integration">
        <img
          src={require("./twitter-image.png")}
          alt="poli"
          className="channel-image"
        />
        <p className="chosse-channel-integration-para">
          connect your community's discord server
        </p>
        <Btn class="choose-integration-btn" name="connect twitter" />
      </div>

      <div className="choose-inapp-integration">
        <img
          src={require("./twitter-image.png")}
          alt="poli"
          className="channel-image"
        />
        <p className="chosse-channel-integration-para">
          Have your in-app community? Use our API
        </p>
        <Btn class="choose-integration-btn" name="documentation" />
      </div>

      <p className=" bottom-contact-para">
        {" "}
        In case of any queries, do drop us whatsapp text on +91-7054118676. We
        will get it resolved ASAP 🎉
      </p>
    </div>
  );
}

export default IntegrationPage;
