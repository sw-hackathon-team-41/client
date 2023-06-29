import React from "react";
import NavBar from './components/navBar';
import Footer from "./components/footer";
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
