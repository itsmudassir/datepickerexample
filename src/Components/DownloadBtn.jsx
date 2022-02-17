import React from "react";

function DownloadBtn(props) {
  return (
    <div>
      <button type="button" className="download-btn">
        <img
          src={require("./Download-image.png")}
          alt="poli"
          className="Download-image"
        />
      </button>
    </div>
  );
}

export default DownloadBtn;
