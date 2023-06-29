import React from "react";
import NavBar from "./containers/navBar";
import Footer from "./containers/footer";
import Contents from "./containers/content";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Contents />
      <Footer />
    </div>
    );
  }

export default App;
