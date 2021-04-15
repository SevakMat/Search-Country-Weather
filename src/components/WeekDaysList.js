import { averageTemp,renderDayContent} from "../util/service";

const WeekDaysList = (props) =>{
  if (!props.ListFromApi) { return 0; }

  return props.ListFromApi.map(( item, i) => {

  const {wind:{speed},dt_txt }=item;
  const data =`Data ${dt_txt.split(" ")[0]}`;
  const AverageTemp = `temp-${averageTemp(dt_txt,props.ListFromApi)}C`;
  const windSpeed = `wind speed ${speed} `

  if (!dt_txt.includes("15:00:00")) { return ; }

  return <span key={i}>
      <div onClick={() => props.test(renderDayContent(item,props.ListFromApi))}  className="one-week-day" >
      <div>{data}</div>
      <div>{AverageTemp}</div>
      <div>{windSpeed}</div>
      <img className="weather-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' />
      </div>
    </span>
  
  
  })
}
export default WeekDaysList;