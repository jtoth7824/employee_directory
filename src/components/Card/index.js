import React from "react";
import "./style.css";

function Card(props) {
  return (

      <table className="table-responsive">
        <thead>
          <tr>
            <th>Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
      {props.results.map(result => (
        <tbody key={result.cell}>
          <tr>
            <td><img src={result.picture.medium} /></td>
            <td><p>{result.name.first}  </p></td>
            <td><p>{result.name.last}   </p></td>
            <td><p>{result.email}   </p></td>
            <td><p>{result.location.city}</p></td>
            <td><p>{result.location.country}</p></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Card;
