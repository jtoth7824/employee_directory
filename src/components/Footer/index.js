import React from "react";
import "./style.css";

function Footer() {
  return (
<section className="container">
    <h2 className="invisible">Container for the sticky footer</h2>
    <section className="fixed-bottom">
        <h3 className="invisible">Bootstrap grid containing footer</h3>
        <section className="row">
            <h4 className="invisible">First row of footer grid</h4>
            <section className="col">
                <h5 className="invisible">Footer for page</h5>
                <footer className="myFooter brand text-left">
                    &copy; John Toth 2021
                </footer>
            </section>
        </section>
    </section>
</section>
  );
}

export default Footer;
