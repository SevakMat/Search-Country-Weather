import { averageTemp,renderDayContent} from "../utils/service";
import {URL_FOR_ICON} from "../utils/constants"


import './styles.css';


const WeekDayItem = (props) => {
  const {wind:{speed},dt_txt }=props.item;
  const data =`Data ${dt_txt.split(" ")[0]}`;

  const AverageTemp = `Temp ${averageTemp(dt_txt,props.data.ListFromApi)}C`;
  const windSpeed = `Wind speed ${speed} `

  return <span>
      <div onClick={() => props.data.test(renderDayContent(props.item, props.data.ListFromApi))}  className="one-week-day" >
      <div>{data}</div>
      <div>{AverageTemp}</div>
      <div>{windSpeed}</div>
      <img className="weather-icon" src={`${URL_FOR_ICON}${props.item.weather[0].icon}@2x.png`} alt='' />
      </div>
    </span>
  

}


export default WeekDayItem;