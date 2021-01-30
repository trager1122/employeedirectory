import React, {useState} from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Filter(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Filter by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={props.filterByMale}>Male</DropdownItem>
          <DropdownItem onClick={props.filterByFemale}>Female</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}

export default Filter;