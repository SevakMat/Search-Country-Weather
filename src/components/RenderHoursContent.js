import React from "react"
import { PropTypes } from 'prop-types';

import { URL_FOR_ICON } from "../utils/constants";
import Icon from "./Icon";

const CityName = ({ name }) => {

  return <div className="city-name">{name}</div>;
};

const RenderHoursContent = ({ content }) => {

  return content.map((tempElem, i) => {
    const { wind: { speed }, main: { temp_max }, dt_txt } = tempElem;
    const windSpeed = `Wind speed ${speed}`;
    const temp = `Temp ${Math.round(temp_max - 273.15)} C`;
    const hour = dt_txt.split(" ")[1].substr(0, 5);

    return (
      <div className="one-hour" key={i}>
        <div>{hour}</div>
        <div>{windSpeed}</div>
        <div>{temp}</div>
        <Icon url={`${URL_FOR_ICON}${tempElem.weather[0].icon}@2x.png`} className={"weather-icon"} />
      </div>
    );
  });
};

const RenderHoursList = ({ content }) => {
  return (
    <div>
      <CityName name={content[0].dt_txt.split(" ")[0]} />
      <div className="hours-content">
        <RenderHoursContent content={content} />
      </div>
    </div>
  );
};

RenderHoursList.propTypes = {
  content: PropTypes.object,
};

CityName.propTypes = {
  name: PropTypes.string
};

export default RenderHoursList;