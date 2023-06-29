import React from "react";
import NavBar from "./containers/navBar";
import Footer from "./containers/footer";
import Home from "./containers/home";
import MyFeed from "./containers/myFeed";
import About from "./containers/about"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TextForm from "./components/textForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/myfeed' Component={MyFeed} />
          <Route path='/about' Component={About}></Route>
        </Routes>
      </Router>
      <Footer />
      <TextForm />
    </div>
    );
  }

export default App;
