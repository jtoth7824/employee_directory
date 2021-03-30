import React from "react";

function Container(props) {
  return (
    <div className="row justify-content-center">
    <div className="col-10 text-center">
      <div style={props.style}>{props.children}</div>      
    </div>
    </div>
  );
}

export default Container;