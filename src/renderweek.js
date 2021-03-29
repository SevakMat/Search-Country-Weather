import React, { useState,useEffect } from 'react';
import { useParams } from "react-router";
import axios from "axios";

import Renderday from "./renderday";
import api from "./constante";

import './styles.css';

const RenderWeek = () => {

  const [weekContentList, setList] = useState(null);
  const [dayWeathers, setDay] = useState(null);
  const { cityName } = useParams();

  const getWeatherData = () => {
    axios.get(`${api.appAddress}?q=${cityName}&appid=${api.appId}`)
      .then((response) => {
        setList(response.data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect( () => {
    getWeatherData();
    setDay(null);
  }, [cityName]);

  const opendaycontent = (e) => {

    const daycontent = [];
    for (let i = 0; i < weekContentList.length; i++) {
      const deyData = (e.dt_txt.split(" ")[0]);
      const hoursInList = weekContentList[i].dt_txt.includes(deyData);
      if (hoursInList) {
        daycontent.push(weekContentList[i]);
      };
    };
    setDay(daycontent);
  };

  const averagetemp = (item) => {

    const templist = [];
    for(const elem in weekContentList) {
      if (weekContentList[elem].dt_txt.includes(item.split(" ")[0])) {
        templist.push(weekContentList[elem].main.temp);
      }
    };
    const sumoftemp = templist.reduce((sum, temp) => {
      return sum + temp;
    }, 0);
    return Math.round(sumoftemp / templist.length - 273.15);
  };

  const weekDayRender = () => {
    if (!weekContentList) { return; }
    return (
      weekContentList.map((item, i) => {
        return (item.dt_txt.includes("15:00:00") &&
          <span key={i}>
            <div onClick={() => opendaycontent(item)} className="one-week-day" >
              <div>{"Data " + item.dt_txt.split(" ")[0]}</div>
              <div>{"Max temp " + Math.round(item.main.temp_max - 273.15)+"C"}</div>
              <div>{"Min temp " + Math.round(item.main.temp_min - 273.15)+"C"}</div>
              <div>
                {" Temp " + averagetemp(item.dt_txt) + "C"}
              </div>
              <img className="weather-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' />

            </div>
          </span>
        );
      })
    );
  };


  return (cityName !== "mylocation" &&
    <div>
      <div className="city-name">
        {cityName}
      </div>
      <div className="contain">
        {weekDayRender()}
      </div>
      {dayWeathers && <Renderday content={dayWeathers} />}
    </div>
  );
};

export default RenderWeek;
