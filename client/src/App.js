import React from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron></Jumbotron>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
