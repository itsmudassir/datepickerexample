import React from "react";

function ShowingResults(props) {
  return (
    <p className="showing-results">
      Showing Results {props.from} - {props.to} of {props.total}
    </p>
  );
}

export default ShowingResults;
