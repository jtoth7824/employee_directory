import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
    <div>
        <table className="table table-curved table-responsive">
          <thead>
            <tr>
              <th className="alignCenter">Pic</th>
              <th className="alignCenter"><span onClick={() => props.sortField("first")}>First Name</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("last")}>Last Name</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("phone")}>Phone</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("street")}>Street</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("city")}>City</span></th>
              <th className="alignCenter"><span onClick={() => props.sortField("state")}>State</span></th>
            </tr>
          </thead>
          <tbody >
          {props.results.map(result => (
            <tr key={result.cell}>
              <td className="align-middle text-center"><img src={result.picture.medium} alt="employee pic"/></td>
              <td className="align-middle text-center"><p>{result.name.first}</p></td>
              <td className="align-middle text-center"><p>{result.name.last}</p></td>
              <td className="align-middle text-center"><p>{result.phone}</p></td>
              <td className="align-middle text-center"><p>{result.location.street.number} {result.location.street.name}</p></td>              
              <td className="align-middle text-center"><p>{result.location.city}</p></td>
              <td className="align-middle text-center"><p>{result.location.state}</p></td>
            </tr>

          ))}
          </tbody>
        </table>
    </div>
  )
}
export default EmployeeTable;
