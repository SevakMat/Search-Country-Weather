import React, { useState, useEffect } from "react";

import Renderday from "./Renderday";
import {getPosition, getDataFropApi, averageTemp, renderDayContent} from "../util/service";
import {LOADING_ICON_URL} from "../util/constante"
import "./styles.css";


const Mylocation = () => {
  const [weekContentList, setWeekContentList] = useState(null);
  const [cityName, setCity] = useState(null);
  const [selectidDay, setDay] = useState(null);
  const [loading, setLoading] = useState(true);


  const getWeatherData = async () => {
    try{
      var position = await getPosition(); /// varx
    }catch(e){
      console.error(e)
    }

    const { coords: { latitude, longitude } } = position;

    const data ={
      x:latitude,
      y:longitude
    };
    try{
      var resp = await getDataFropApi(data);//var  
    }catch(e){
      console.log(e)
    }

    const { data: {city:{ name },list } } = resp;
    setWeekContentList(list);
    setCity(name);
    setLoading(false);

  };

  useEffect(() => {
    
    getWeatherData();
  }, [cityName]);


  const weekDayRender = () => {

    if (!weekContentList) { return 0; }
    return weekContentList.map((item, i) => {

        const {dt_txt }=item;
        const data =`Data ${item.dt_txt.split(" ")[0]}`;
        const AverageTemp = `temp ${averageTemp(dt_txt,weekContentList)}C`;

        return (item.dt_txt.includes("15:00:00") &&
        <span  key={i}>
          <div onClick={() => setDay(renderDayContent(item,weekContentList))} className="one-week-day" >
            <div>{data}</div>
            <div>{AverageTemp}</div>
            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' />
          </div>
        </span>
        );
      })
  };

  return (!loading ?
    <div>
      <div className="city-name"> {`Your location is  ${cityName}`} </div>
      <div className="contain">
        {weekDayRender()}
      </div>
      {selectidDay && <Renderday content={selectidDay} />}
    </div>
    :
      <img alt ="" className="loading-icon" src={LOADING_ICON_URL}></img>
  );
};

export default Mylocation;