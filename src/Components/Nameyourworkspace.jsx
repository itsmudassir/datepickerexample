import React from "react";

function NameWorkspace(props) {
  return (
    <div>
      <p className="name-your-workspace">Name your Workspace</p>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control workspace-imput"
            placeholder="Name"
          />
        </div>

        <button type="submit" className="btn btn-primary workspace-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NameWorkspace;
