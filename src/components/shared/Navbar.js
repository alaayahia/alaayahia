import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-custom">
 

      <div class="container">
      <Link to="/" className="navbar-brand">
       الموراد البشريه
      </Link>
  
  
      <ul class="navbar-nav mr-auto">              
            <CustomLink to="/emplist">الموظف</CustomLink>             
            <CustomLink to="/empdoc">مسنتدات الموظف</CustomLink>
            <CustomLink to="/empcompen">بنود الموظف</CustomLink>
            {/* <CustomLink to="/empdoc">About</CustomLink>        */}
      </ul>
    </div>
    </nav>
   
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""} class="nav-item">
      <Link to={to} {...props} class="nav-link">
        {children}
      </Link>
    </li>
  )
}