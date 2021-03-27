import React from "react";
import "./style.css";

function Card(props) {
  return (

      <table className="table-responsive">
        <thead>
          <tr>
            <th>Pic</th>
            <th><span onClick={() => props.sortField("first")}>First Name</span></th>
            <th><span onClick={() => props.sortField("last")}>Last Name</span></th>
            <th><span onClick={() => props.sortField("email")}>Email</span></th>
            <th><span onClick={() => props.sortField("phone")}>Phone</span></th>
          </tr>
        </thead>
      {props.results.map(result => (
        <tbody key={result.cell}>
          <tr>
            <td><img src={result.picture.medium} alt="employee pic"/></td>
            <td><p>{result.name.first}  </p></td>
            <td><p>{result.name.last}   </p></td>
            <td><p>{result.email}   </p></td>
            <td><p>{result.phone}   </p></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Card;
