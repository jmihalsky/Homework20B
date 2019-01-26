import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/BookSearch";
import Saved from "./pages/SavedBooks";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron></Jumbotron>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
