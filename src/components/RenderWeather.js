import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


import RenderHoursList from "./renderHoursContent";
import {getPosition, getDataFropApi} from "../utils/service";
import WeekDaysList from "./WeekDaysList";
import {LOADING_ICON_URL} from "../utils/constants";
import Icon from "./Icon";

import "./styles.css";

const RenderWeather = () => {
  const { cityName } = useParams();
  const [selectidDay, setDay] = useState(null);
  const [isDayList,setIsDayList]= useState();

  const [allValues, setAllValues] = useState({
    listFromApi:null,
    selectedCityName:null,
    loading:true
  });

  
  const getWeatherData = (e) => {
    setIsDayList(false);
    new Promise((resolve) => {
      resolve(getPosition(cityName));
    })
      .then((position) => {
        const { coords: { latitude, longitude } } = position;
        const data = {
          city: cityName,
          x: latitude,
          y: longitude
        };
        new Promise((resolve) => {
          resolve(getDataFropApi(data));
        })
          .then((resp) => {
            const { data: {city: { name },list } } = resp;
            setAllValues({
              ...allValues,
              listFromApi:list,
              selectedCityName:name,
              loading:false
            });
          }).catch((error) => {
            console.log(error, "This is my error");
          });
      });
  };

  useEffect(() => {
    console.log("u=in use effect");
    getWeatherData();
  }, [cityName]);

  if (allValues.loading)return <Icon url = {LOADING_ICON_URL} className = {"loading-icon"}/>;
  return <div>
    <div className="city-name"> {cityName? cityName : `Your location is  ${allValues.selectedCityName}`} </div>
    <div className="contain">
      <WeekDaysList 
        listFromApi = {allValues.listFromApi} 
        setDay={setDay} 
        setIsDayList={setIsDayList}
      />
    </div>
    {isDayList && <RenderHoursList content={selectidDay} />}
  </div>;
  
};

export default RenderWeather;