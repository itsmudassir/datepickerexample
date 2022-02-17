import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
function FilterBtn(props) {
  return (
    <div>
      <DropdownButton
        id="filter-right-button"
        title={
          <img
            src={require("./Filter-image.png")}
            alt="poli"
            className="filter-image"
          />
        }
      >
        <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mediocre</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default FilterBtn;
