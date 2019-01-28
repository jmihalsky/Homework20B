import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import JumbotronHeader from "./components/jumbotronHeader";
import Search from "./pages/BookSearch";
import Saved from "./pages/SavedBooks";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <JumbotronHeader></JumbotronHeader>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
