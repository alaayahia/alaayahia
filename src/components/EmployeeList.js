import axios from "axios";
import React from "react";
import { Table } from 'reactstrap';
import EmployeeForm from "./EmployeeForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";


export default class EmployeeList extends React.Component {
    url = "https://localhost:7278/api/";
    state ={
        employees: [],
    }

    componentDidMount() {
        axios.get(this.url + 'employees')
        .then(res => {
            const employees = res.data;
            this.setState({employees});
        })
    }

    render() {
        return (
          <>
          
          <EmployeeForm/>
          <div className="container mt-4"> 
          <div className="card">   
          <div class="card-body">    
          <Table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th>اسم الموظف</th>
                <th>النوع</th>
                <th>الوصف الوظيفي</th>
                <th>Action</th>
              </tr>   
            </thead>   
            <tbody>
              {
              this.state.employees.map( (emp,key) =>
              <tr key={key}>
                  <td className='table-data'>{emp.empName }</td>
                  <td className='table-data'>{emp.gender }</td>
                  <td className='table-data'>{ emp.jopDescription}</td>
                  <td>
                  <button class="btn btn-outline-primary"> <FontAwesomeIcon icon={faPen} /></button>
                  <button class="btn btn-outline-danger"><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
              </tr>
              )
            }
            </tbody>
          </Table>
          </div>
          </div>  
          </div>
          
            {/* // <ul>
            //     {
            //         this.state.employees
            //           .map(emp => 
            //             <li key={emp.id}> {emp.empName}</li>)
            //     }
            // </ul> */}
          </>
        )
    }
}