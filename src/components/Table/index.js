import React from "react";
import Employees from "./utils/API";
import moment from "moment";

//Thomas Rager

function Table(props) {
  const employees=Employees.generate();
  const { picture, name, phone, email, dob }=props.employees;
  return (
  <table class="table">
    <thead>
      <tr>
      <th scope="col">Picture</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Birthdate</th>
    </tr>
    </thead>
    <tbody>
      {props.employees.map((employee) => (
        <tr>
            <td><img alt={name} src={picture.thumbnail} /></td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{moment(dob.date).format("MM-DD-YYYY")}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}
    