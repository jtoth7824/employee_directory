import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="container">
        <div className="fixed-bottom">
           <div className="row">
               <div className="col">
                    <footer className="myFooter brand text-left">
                       &copy; John Toth 2021
                    </footer>
               </div>
           </div>
       </div>
    </div>
  );
}

export default Footer;
