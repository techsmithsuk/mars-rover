import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {MarsMapImg} from './Mission-Map'

export function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/weather">
          <h1>Weather</h1>
        </Route>

        <Route path="/missions">
          <MarsMapImg/>
        </Route>

        <Route path="/rovers">
          <h1>Rovers</h1>
        </Route>

        <Route path="/">
          <h1>Landing Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}
