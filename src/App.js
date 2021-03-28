import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Navbar />
          <Search />
        <Footer />
      </div>
  );
}

export default App;
