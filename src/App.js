import React from 'react';
import DropDown from './dropdown';
import { Route } from "react-router-dom";
import RenderWeek from "./renderweek";
import Mylocation from './mylocation';
import './styles.css';


function App() {

  return (
    <div className="big" >
      <Route exact path="/">
          <DropDown/>
      </Route>
      <Route exact path = {"/"}>
        <Mylocation/>
      </Route>
      <Route exact path = {`/:cityName`} >
        <RenderWeek/>
      </Route>
    </div>
  );
};
export default App;
