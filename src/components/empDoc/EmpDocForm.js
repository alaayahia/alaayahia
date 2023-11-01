import React from "react";
import { Input } from "reactstrap";


export default class EmpDocForm extends React.Component {



    render () {
        return(
            <div class="container mt-3">
            <div class="card">
                <div class="card-body">
                   
                    <form class="form-inline" id="editEmpDocForm">
                        <div class="form-group px-2">
                            <label for="">اسم الموظف : </label>
                            <select name="emp" class="form-control ml-1"  id="empId">
                                <option>-- اختار --</option>
                                <option >ggg</option>
                            </select>
                        </div>
                        <div class="form-group px-2">
                            <label for="">اسم المستند : </label>
                            <Input type="text" class="form-control mx-2" id="docName"/>
                        </div>
                        <div class="form-group px-2">
                            <label for="">نوع المستند  : </label>
                            <Input type="text" class="form-control mx-2" id="docType"/>
                        </div>
                        <div class="form-group px-2">
                            <label for="">مسار المستند  : </label>
                            <Input type="text" class="form-control mx-2" id="docUrl"/>
                        </div>
                    </form>
                   
                </div>
                <div class="card-footer">
                    <button form="editEmpDocForm" type="submit" class="btn btn-success btn-block">Save Changes</button>
                </div>    
            </div>    
        </div>
        )
    }
}