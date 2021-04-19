import React from 'react';
import { Route } from "react-router-dom";


import DropDown from './components/Dropdown';
import RenderWeather from './components/RenderWeather';
import Cityes from './utils/Cyties';


import './components/styles.css';


const App = () =>
  <div className="background-img">
    <DropDown Cityes = {Cityes} />
    <Route path = '/weather/:cityName?'>
      <RenderWeather/>
    </Route>
  </div>;
export default App;
