import { URL_FOR_ICON } from "../utils/constants";
import Icon from "./Icon";

const RenderHoursList = ({ content }) => {

  const renderHoursContent = () => {
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
          <Icon url={`${URL_FOR_ICON}${tempElem.weather[0].icon}@2x.png`} className={"weather-icon"} ></Icon>
        </div>
      );
    });
  };

  const cityName = () => <div className="city-name">{content[0].dt_txt.split(" ")[0]}</div>;

  return (
    <div>
      {cityName()}
      <div className="hours-content">
        {renderHoursContent()}
      </div>
    </div>
  );
};

export default RenderHoursList;