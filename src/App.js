import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./containers/navBar";
import Footer from "./containers/footer";
import Home from "./containers/home";
import MyFeed from "./containers/myFeed";
import About from "./containers/about"
import TextForm from "./containers/textForm";
import Login from "./containers/Login";
import SignUp from "./containers/signUp";
import Survey from "./containers/survey";

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
          <Route path='/login' Component={Login}></Route>
          <Route path='/signup' Component={SignUp}></Route>
          <Route path='/survey' Component={Survey} />
        </Routes>
      </Router>
      <Footer />
    </div>
    );
  }

export default App;
