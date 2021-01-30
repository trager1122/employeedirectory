import React, {useState} from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  dropdownOpen
} from "reactstrap";

function Sort(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Sort by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={props.sortByName}>Name</DropdownItem>
          <DropdownItem onClick={props.sortByDOB}>Birthdate</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}

export default Sort;
