import React from 'react';
import { Route } from "react-router-dom";

import RenderWeather from './components/RenderWeather';

import './styles/styles.css';

const App = () =>
  <div className="background-img">
    <Route path = '/weather/:cityName?'>
      <RenderWeather/>
    </Route>
  </div>;
export default App;
