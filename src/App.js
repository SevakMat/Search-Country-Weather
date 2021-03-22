import React, { Component } from 'react';
import DropDown from './dropdown';
import { Route } from "react-router-dom";
import Cities from './list';
import RenderWeek from "./renderweek";
import Mylocation from './mylocation';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
            <DropDown />
        </Route>
        <Route exact path={"/mylocation"}>
          <Mylocation />
        </Route>
        {Cities.map((item) => {
          return (
          <Route exact path={`/${item}`} key={item} >
            <RenderWeek city={item} />
          </Route>
          )
        })}
      </div>
    );
  }
}
export default App;
