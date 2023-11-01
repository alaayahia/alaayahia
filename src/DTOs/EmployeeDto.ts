export interface IEmployeeParams {
    id: number
    empName: string
    gender: string
    jobDescription: string
}

export interface IEmployeeDto {
    readonly id: number
    readonly empName: string
    readonly gender: string
    readonly jobDescription: string
}

class EmployeeDto implements IEmployeeDto {
   readonly id: number
   readonly empName: string
   readonly gender: string
   readonly jobDescription: string
constructor(params: IEmployeeParams) 
{
    this.id = params.id
    this.empName = params.empName
    this.gender = params.gender
    this.jobDescription = params.jobDescription
}
}

export default EmployeeDto