import React from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import { useEffect } from "react";
import axios from "../hooks/useHttp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from "@fortawesome/free-solid-svg-icons";

 
 



const EmployeeForm = () => {
    

     
   const [emps, error, loading, axiosFetch] = useAxiosFunction();
   

   const getData = () => {
    axiosFetch({
        axiosInstance: axios,
        method: 'get',
        url: '/employees'
    });
}

   useEffect(() => {
    getData();
    // eslint-disable-next-line 
}, [])

   const addEmp = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'post',
            url: '/employees',
            requestConfig: {
                data: {
                    empName: '',
                    gender: '',
                    jopDescription: '',
                    dateOfBirth: '',
                    appointmentDate: ''
                }
            }
        })
        
    }
 

    // function createEmp() {
    //     axios.post(url + 'employees',{
    //         empName: 'fff',
    //         gender: 'male',
    //         jopDescription: 'developer',
    //         dateOfBirth: '1999-01-01T21:35:06.273Z',
    //         appointmentDate: '2023-10-31T21:35:06.273Z'
    //     })
    //     .then((response) => {
    //         setPost(response.data);
    //     });
    // }


        return (
            <div class="container mt-3">
    <div class="card">
        <div class="card-body">
           
            <form class="form-inline" >
                <div class="form-group px-2">
                    <label for="">اسم الموظف : </label>
                    <input type="text" class="form-control mx-1"  onChange={emps.data?.empName}/>
                </div>
                <div class="form-group px-2">
                    <label for=""> النوع</label>
                    <select name="gender" class="form-control ml-1">
                        <option>-- اختار --</option>
                        <option value={"male"} >ذكر</option>
                        <option value={"female"}>انثى</option>
                    </select>
                </div>
                <div class="form-group px-2">
                    <label for="">الوصف الوظيفي : </label>
                    <input type="text" class="form-control mx-2"  onChange={emps.data?.jopDescription}/>
                </div>
                
            </form>
           
        </div>
        <div class="card-footer">
            <button type="submit" onClick={addEmp} class="btn btn-success btn-block"> <FontAwesomeIcon icon={faSave} /> Save Changes</button>
           
        </div>    
    </div>    
</div>

        )


}
export default EmployeeForm;