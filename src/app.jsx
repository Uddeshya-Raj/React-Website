import React from "react";
import Navbar from "./nav.jsx";
import Cover from "./cover.jsx";
import Services from "./services.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Services />
    </div>
  );
}

export default App;