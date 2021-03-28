import React from "react";
import "./style.css";

function Card(props) {
  return (
    
        <table className="table table-curved table-responsive">
          <thead>
            <tr>
              <th className="alignCenter">Pic</th>
              <th className="alignCenter"><span onClick={() => props.sortField("first")}>First Name</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("last")}>Last Name</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("email")}>Email</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("phone")}>Phone</span></th>
            </tr>
          </thead>
          <tbody >
          {props.results.map(result => (
            <tr key={result.cell}>
              <td className="align-middle text-center"><img src={result.picture.medium} alt="employee pic"/></td>
              <td className="align-middle text-center"><p>{result.name.first}</p></td>
              <td className="align-middle text-center"><p>{result.name.last}</p></td>
              <td className="align-middle text-center"><p>{result.email}</p></td>
              <td className="align-middle text-center"><p>{result.phone}</p></td>
            </tr>

          ))}
          </tbody>
        </table>
  )
}
export default Card;
