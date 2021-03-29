import React, { useState, useEffect } from "react";
import axios from "axios";

import Renderday from "./renderday";
import api from "./constante";

import "./styles.css";


const Mylocation = () => {

  const [weekContentList, setList] = useState(null);
  const [cityName, setCity] = useState(null);
  const [day, setDay] = useState(null);

  const getWeatherData = () => {

    const geoSuccess = (position) => {
      axios.get(`${api.appAddress}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api.appId}`)
        .then((response) => {
          setList(response.data.list);
          setCity(response.data.city.name);
        })
        .catch((error) => {
          console.log("this is error", error);
        });
    };
    const geoError = (position) => {
      console.log("geoerror");
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const renderDayContent = (e) => {
    const daycontent = [];
    for (const item in weekContentList){
      const deyData = (e.dt_txt.split(" ")[0]);
      if (weekContentList[item].dt_txt.includes(deyData)) {
        daycontent.push(weekContentList[item]);
      }
    };
    setDay(daycontent);
  };

  const listElemSum = (templist) => {
    const sumOfWeekTemp = templist.reduce((a, b) => {
      return a + b;
    }, 0);
    return sumOfWeekTemp;
  };

  const averageTemp = (item) => {
    const templist = [];
    for (const elem in weekContentList) {
      if (weekContentList[elem].dt_txt.includes(item.split(" ")[0])) {
        templist.push(weekContentList[elem].main.temp);
      }
    };
    const sumOfWeekTemp = listElemSum(templist);
    const averagetemp = Math.round(sumOfWeekTemp / templist.length - 273.15);
    return averagetemp;
  };

  const weekDayRender = () => {

    if (!weekContentList) { console.log("in render week", weekContentList); return; }
    return (
      weekContentList.map((item, i) => {
        return (item.dt_txt.includes("15:00:00") &&
          <div onClick={() => renderDayContent(item)} className="one-week-day" key={i}>
            <div>{"Data " + item.dt_txt.split(" ")[0]}</div>
            <div>{"Max temp " + Math.round(item.main.temp_max - 273.15)+"C"}</div>
            <div>{"Min temp " + Math.round(item.main.temp_min - 273.15)+"C"}</div>
            <div>
              {" temp- " + averageTemp(item.dt_txt) + "C"}
            </div>
            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' />

          </div>
        );
      })
    );
  };

  return (
    <div>
      <div className="city-name"> {"Your location is " + cityName} </div>
      <div className="contain">
        {weekDayRender()}
      </div>
      {day && <Renderday content={day} />}
    </div>
  );
};

export default Mylocation;