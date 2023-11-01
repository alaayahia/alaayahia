import React  from 'react';
import { Route, Routes } from "react-router-dom"
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmpDoc from "./components/empDoc/EmpDoc";
import NoPage from "./components/NoPage";
import Home from "./components/shared/home";
import Navbar from "./components/shared/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emplist" element={<EmployeeList />} />
          <Route path="/empform" element={<EmployeeForm />} />
          <Route path="/empdoc" element={<EmpDoc />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App