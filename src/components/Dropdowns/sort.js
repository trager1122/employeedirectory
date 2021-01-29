import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Sort(props) {
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Sort by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={props.sortByName}>Name</DropdownItem>
          <DropdownItem onClick={props.sortyByDOB}>Birthdate</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}

export default Sort;
