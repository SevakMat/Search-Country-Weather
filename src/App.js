import React from 'react';
import { Route } from "react-router-dom";

import DropDown from './components/Dropdown';
import RenderWeek from "./components/Renderweek";
import Mylocation from './components/Mylocation';

import './components/styles.css';


const App = () =>
  <div className="background-img">
    <Route path="/weather">
      <DropDown/>
    </Route>
    <Route exact path="/weather">
      <Mylocation/>
    </Route>
    <Route exact path = "/weather/:cityName" >
      <RenderWeek/>
    </Route>
  </div>
export default App;
