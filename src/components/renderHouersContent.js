import React from "react";

import {URL_FOR_ICON} from "../utils/constants"

import './styles.css';

const RenderHouersList = (props) => {

  const renderHouersContent = () => {
    return props.content.map((item, i) => {
      const windSpeed = `Wind speed ${item.wind.speed} `
      const Temp =`Temp ${Math.round(item.main.temp_max - 273.15)} C`

      return (
        <div className="one-hour" key={i}>
          <div>{item.dt_txt.split(" ")[1].substr(0, 5)}</div>
          <div>{windSpeed}</div>
          <div>{Temp}</div>
          <img className="weather-icon" src={`${URL_FOR_ICON}${item.weather[0].icon}@2x.png`} alt='' />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="city-name">{props.content[0].dt_txt.split(" ")[0]}</div>
      <div className="hours-content">
        {renderHouersContent()}
      </div>
    </div>
  );
};
export default RenderHouersList;