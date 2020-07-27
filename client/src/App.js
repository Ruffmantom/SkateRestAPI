import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
// components
import Header from "./components/Header";
// pages
import Skaters from "./Pages/Skaters";
import AddNew from "./Pages/AddNew";
import notFound from "./Pages/notFound";


function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Skaters} />
          <Route exact path="/addnew" component={AddNew} />
          <Route component={notFound}/>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
