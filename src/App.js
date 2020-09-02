import React from 'react';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import NationDetails from './Component/NationDetails/NationDetails';

function App() {
  return (

    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/nation/:name">
            <NationDetails/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
