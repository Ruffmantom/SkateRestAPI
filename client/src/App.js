import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Header from "./components/Header";
// pages
import Skaters from "./Pages/Skaters";
import AddNew from "./Pages/AddNew";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Skaters}/>
        <Route exact path="/skaters" component={Skaters}/>
        <Route exact path="/addnew" component={AddNew}/>
      </div>
    </Router>

  );
}

export default App;
