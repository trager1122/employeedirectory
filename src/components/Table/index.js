import React, { Component } from "react";
import API from "../../utils/API";
import moment from "moment";

class Table extends Component{
  state={
    employees:[],
  };

  componentDidMount() {
    API.generate()
      .then(res => this.setState({ employees: res.data.results }))
      .then(console.log("Component Mounted!"))
      .then(console.log(this.state.employees));
  }
  
  render() {
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
          {this.state.employees.map((employee) => (
            <tr>
              <td><img alt={`${employee.name.first} ${employee.name.last}`} src={employee.picture.thumbnail} /></td>
              <td>{`${employee.name.first} ${employee.name.last}`}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{moment(employee.dob.date).format("MM-DD-YYYY")}</td>
            </tr>
          ))};
        </tbody>
     </table>
     );
  }
}

export default Table;
