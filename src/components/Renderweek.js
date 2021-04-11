import React, { useState,useEffect } from 'react';
import { useParams } from "react-router";

import Renderday from "./Renderday";
import {getData, averageTemp, renderDayContent} from "../util/service";
import {LOADING_ICON_URL} from "../util/constante"
import './styles.css';

const RenderWeek = () => {

  const [weekContentList, setList] = useState(null);
  const [dayWeathers, setDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cityName } = useParams();

  const getWeatherData = async () => {
    const data = {city:cityName};

    try{
      var resp = await getData(data);//var  
    }catch(e){
      console.log(e)
    }
    const {data:{list}}=resp;
    setList(list);
    setDay(null);
    setLoading(false);
  };

  useEffect( () => {
    getWeatherData();
  }, [cityName]);

  const weekDayRender = () => {
    if (!weekContentList) { return 0; }
    return (
      weekContentList.map(( item, i) => {

        const {dt_txt }=item;
        const data =`Data${item.dt_txt.split(" ")[0]}`;
        const AverageTemp = `temp-${averageTemp(item.dt_txt,weekContentList)}C`;

        return (dt_txt.includes("15:00:00") &&
          <span key={i}>
            <div onClick={() =>setDay(renderDayContent(item,weekContentList))} className="one-week-day" >
            <div>{data}</div>
            <div>{AverageTemp}</div>
            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' />
            </div>
          </span>
        );
      })
    );
  };


  return (cityName !== "mylocation" &&
   !loading?
      <div>
        <div className="city-name">
          {cityName}
        </div>
        <div className="contain">
          {weekDayRender()}
        </div>
        {dayWeathers && <Renderday content={dayWeathers} />}
      </div>
      :
      <img className="loading-icon" alt ="" src={LOADING_ICON_URL}></img>
  );
};

export default RenderWeek;
