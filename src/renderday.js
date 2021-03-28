import React from "react";
import './styles.css';

const Renderday = (props) => {
  const renderDayContent = () => {
    return props.content.map((item, i) => {
      return (
        <div className="one-hour" key={i}>
          {item.dt_txt.split(" ")[1] + ", Temp "}
          {Math.round(item.main.temp - 273.15) + "C"}
        </div>
      );
    });
  };

  return (
    <div className="day-content">
      {renderDayContent()}
    </div>
  );
};
export default Renderday;