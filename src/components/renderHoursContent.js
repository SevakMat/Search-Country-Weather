import React from "react";

import { URL_FOR_ICON } from "../utils/constants";

import './styles.css';

const RenderHoursList = ({ content }) => {

  const renderHoursContent = () => {
    return content.map((item, i) => {
      const { wind: { speed }, main: { temp_max }, dt_txt } = item;
      const windSpeed = `Wind speed ${speed}`;
      const temp = `Temp ${Math.round(temp_max - 273.15)} C`;

      return (
        <div className="one-hour" key= {i}>
          <div>{dt_txt.split(" ")[1].substr(0, 5)}</div>
          <div>{windSpeed}</div>
          <div>{temp}</div>
          <img className="weather-icon" src={`${URL_FOR_ICON}${item.weather[0].icon}@2x.png`} alt='' />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="city-name">{content[0].dt_txt.split(" ")[0]}</div>
      <div className="hours-content">
        {renderHoursContent()}
      </div>
    </div>
  );
};
export default RenderHoursList;