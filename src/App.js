import React from "react";
import NavBar from "./containers/navBar";
import Footer from "./containers/footer";
import Home from "./containers/home";
import MyFeed from "./containers/myFeed";
import About from "./containers/about"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TextForm from "./containers/textForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/myfeed' Component={MyFeed} />
          <Route path='/textForm' Component={TextForm} /> 
          <Route path='/about' Component={About}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
    );
  }

export default App;
