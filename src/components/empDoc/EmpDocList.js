import React from "react";


export default class EmpDocList extends React.Component {

    render() {
        return (
            <>
            <div className="container mt-4"> 
            <div className="card">   
            <div class="card-body">     
            <Table class="table table-hover">
              <thead class="thead-dark">
                <tr>
                  <th>اسم الموظف</th>
                  <th>اسم المستند</th>
                  <th>نوع المستند</th>
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
                    <button class="btn btn-outline-primary"><i class="fa fa-save"></i>edit</button>
                    <button class="btn btn-outline-danger"><i class="fa fa-ban"></i>cancle</button>
                    </td>
                </tr>
                )
              }
              </tbody>
            </Table>
            </div>
            </div>  
            </div>
            
            
            </>
        )
    }
}