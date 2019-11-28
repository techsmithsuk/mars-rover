import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Weather} from "./components/weather-page/Weather";
import {MissionPage} from './Mission-Page'
import { HomePage } from './Home';
import { MarsRover } from './rover/marsRover';
import { Navbar } from './components/navbar/Navbar';

export function App(): ReactElement {
  return (
    <Router>
     
      <Switch>
        <Route path="/weather">
          <Navbar/>
          <Weather />
        </Route>

        <Route path="/missions">
          <Navbar/>
          <MissionPage/>
        </Route>

        <Route path="/rovers">
          <Navbar/>
          <MarsRover />
        </Route>

        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}
