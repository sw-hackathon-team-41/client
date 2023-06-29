import React from "react";
import NavBar from "./containers/navBar";
import Footer from "./containers/footer";
import Home from "./containers/home";

import TextForm from "./components/textForm";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Contents /> */}
      <Home />
      <Footer />
      <TextForm />
    </div>
    );
  }

export default App;
