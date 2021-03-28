import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
      <div>
        <Header />
        <Search />
        <Footer />
      </div>
  );
}

export default App;
