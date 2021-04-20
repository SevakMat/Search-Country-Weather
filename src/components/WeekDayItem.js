import { renderDayContent } from "../utils/functions";
import { URL_FOR_ICON } from "../utils/constants";

import './styles.css';

const WeekDayItem = (props) => {
  const {
    item: { wind: { speed }, dt_txt, main: { temp_max } },
    data: { listFromApi }, data, item } = props;
  const datas = `Data ${dt_txt.split(" ")[0]}`;

  const temp = `Temp ${Math.round(temp_max - 273.15)} C`;
  const windSpeed = `Wind speed ${speed}`;

  return <span>
    <div
      onClick={() => {
       
        data.setAllValues({
          ...data.allValues,
          isDayList:true,
          selectedDay: renderDayContent(item, listFromApi)
        });
      }}
      className="one-week-day">
      <div>{datas}</div>
      <div>{temp}</div>
      <div>{windSpeed}</div>
      <img className="weather-icon" src={`${URL_FOR_ICON}${item.weather[0].icon}@2x.png`} alt='' />
    </div>
  </span>;
};

export default WeekDayItem;