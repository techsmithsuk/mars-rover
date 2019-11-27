import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from './Home';
import { MarsRover } from './rover/marsRover';
import { MissionPage } from './components/missions-page/MissionPage';

export function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/weather">
          <h1>Weather</h1>
        </Route>

        <Route path="/missions">
          <MissionPage/>
        </Route>

        <Route path="/rovers">
          <MarsRover />
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}
