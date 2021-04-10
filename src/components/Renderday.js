import React from "react";
import './styles.css';

const Renderday = (props) => {

  const renderDayContent = () => {
    return props.content.map((item, i) => {
      return (
        <div className="one-hour" key={i}>
          <div>{item.dt_txt.split(" ")[1].substr(0, 5)}</div>
          <div>{" Temp " + Math.round(item.main.temp - 273.15) + "C"}</div>
          <div>{"Max temp " + Math.round(item.main.temp_max - 273.15)+"C"}</div>
          <div>{"Min temp " + Math.round(item.main.temp_min - 273.15)+"C"}</div>
          <img className="weather-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="city-name">{props.content[0].dt_txt.split(" ")[0] }</div>
      <div className="hours-content">
        {renderDayContent()}
      </div>
    </div>
  );
};
export default Renderday;