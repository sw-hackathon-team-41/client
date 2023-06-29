import React from "react";
import NavBar from "./containers/navBar";
import Footer from "./containers/footer";
import Home from "./containers/home";
import MyFeed from "./containers/myFeed";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/myfeed' Component={MyFeed} />
        </Routes>
      </Router>
      <Footer />
    </div>
    );
  }

export default App;
