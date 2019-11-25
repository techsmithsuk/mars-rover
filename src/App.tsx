import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Weather} from "./components/weather-page/Weather";

export function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/weather">
          <Weather />
        </Route>

        <Route path="/missions">
          <h1>Missions</h1>
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
