import React from "react";
import NavBar from './navBar/navBar';
import Footer from "./footer/footer";
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
    );
  }

export default App;
