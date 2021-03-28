import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron text-center">
        <h1>Employee Directory</h1>
        <p className="lead">Enter search term to filter list of employees.   Click on Column Names to sort the employee list.</p>
    </div>
  );
}

export default Header;