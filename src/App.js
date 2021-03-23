import React from 'react';
import DropDown from './dropdown';
import { Route } from "react-router-dom";
import RenderWeek from "./renderweek";
import Mylocation from './mylocation';

function App () {
  return (
    <div>
      <Route exact path="/">
          <DropDown />
      </Route>
      <Route exact path={"/mylocation"}>
        <Mylocation />
      </Route>

        <Route exact path={`/:cityName`} >
          <RenderWeek/>
        </Route>
    </div>
  );
}
export default App;
