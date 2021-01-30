import React, {Component} from "react";
import { Table } from "reactstrap";
import API from "../../utils/API";
import moment from "moment";
import Filter from "../Dropdowns/Filter";
import Sort from "../Dropdowns/Sort";
  
class EmpTable extends Component{
  sortByName=this.sortByName.bind(this);
  sortByDOB=this.sortByDOB.bind(this);
  filterByMale=this.filterByMale.bind(this);
  filterByFemale=this.filterByFemale.bind(this);

  state={
    employees:[],
  };

  componentDidMount() {
    API.generate()
      .then(res => this.setState({ employees: res.data.results },()=>{
        console.log("Component Mounted!");
      }))
  }
  
  sortByName(event){
    const {employees}=this.state
    let sortedEmployees=employees
    this.setState({
      employees:sortedEmployees.sort((a, b) => a.name.last.localeCompare(b.name.last))
    })
  }

  sortByDOB(event){
    const {employees}=this.state
    let sortedEmployees=employees
    this.setState({
      employees:sortedEmployees.sort((a, b) => a.dob.date.localeCompare(b.dob.date))
    })
  }

  filterByMale(event){
    // const {employees}=this.state
    let filteredEmployees=this.state.employees
    console.log(this.state.employees)
    this.setState({
      employees:filteredEmployees.filter((e) => e.gender === "male")
    },()=>{
      console.log(this.state.employees)
    })
  }

  filterByFemale(event){
    const {employees}=this.state
    let filteredEmployees=employees
    this.setState({
      employees:filteredEmployees.filter((e) => e.gender === "female")
    })
  }

  render() {
   let margin={
      marginLeft: "75vw"
    }
    return (
      <div>
        <span className="d-flex justify-content-start">
        <Sort sortByName={this.sortByName} sortByDOB={this.sortByDOB}/>
        <Filter className="d-flex filterBtn justify-content-end" 
        filterByMale={this.filterByMale} filterByFemale={this.filterByFemale}
        />
        </span>
        <Table>
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
      </Table>
      </div>
    );
  }
}

export default EmpTable;
