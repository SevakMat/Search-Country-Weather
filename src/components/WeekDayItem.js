import { renderDayContent } from "../utils/helpers";
import { URL_FOR_ICON } from "../utils/constants";
import Icon from "./Icon";

const WeekDayItem = (props) => {
  const {
    item: { wind: { speed }, dt_txt, main: { temp_max } },
    data: { allValues: { listFromApi } }, data, item } = props;
  const datas = `Data ${dt_txt.split(" ")[0]}`;

  const temp = `Temp ${Math.round(temp_max - 273.15)} C`;
  const windSpeed = `Wind speed ${speed}`;

  return (
    <span>
      <div
        onClick={() => {
          data.onDayChange(true);
          data.setAllValues({
            ...data.allValues,
            selectidDay: renderDayContent(item, listFromApi)
          });
        }}
        className="one-week-day" >
        <div>{datas}</div>
        <div>{temp}</div>
        <div>{windSpeed}</div>
        <Icon url={`${URL_FOR_ICON}${item.weather[0].icon}@2x.png`} className="weather-icon" />
      </div>
    </span>
  );
};

export default WeekDayItem;