import React from 'react';
import { Route } from "react-router-dom";

import DropDown from './dropdown';
import RenderWeek from "./renderweek";
import Mylocation from './mylocation';

import './styles.css';


const App = () => {

  return (
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
  );
};
export default App;
