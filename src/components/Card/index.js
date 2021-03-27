import React from "react";
import "./style.css";

function Card(props) {
  return (

    props.results.map(result => (
      <div class="row">
      <div class="col-12">
      <div class="card-body">
      <div style={{float: "left"}}><img src={result.picture.medium} /></div>
        <div style={{float: "left"}}><p>{result.name.first}  </p></div>
        <div style={{float: "left"}}><p>{result.name.last}   </p></div>
        <div style={{float: "left"}}><p>{result.email}   </p></div>

      </div>
</div>
</div>
    ))

  );
}

export default Card;
