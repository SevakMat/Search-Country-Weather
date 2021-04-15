import React, { useState, useEffect } from "react";

import RenderHouersList from "./renderHouersContent";
import {getPosition, getDataFropApi} from "../utils/service";
import {LOADING_ICON_URL} from "../utils/constants"
import WeekDaysList from "./WeekDaysList"

import "./styles.css";

const Mylocation = () => {
  const [ListFromApi, setListFromApi] = useState(null);
  const [selectedCityName, setCity] = useState(null);
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
    setListFromApi(list);
    setCity(name);
    setLoading(false);

  };

  useEffect(() => {
    
    getWeatherData();
  }, [selectedCityName]);

  const test = (qqq)=>{
    setDay(qqq)
}   

  return (!loading ?
    <div>
      <div className="city-name"> {`Your location is  ${selectedCityName}`} </div>
      <div className="contain">
      <WeekDaysList ListFromApi={ListFromApi} test={test}/>
      </div>
      {selectidDay && <RenderHouersList content={selectidDay} />}
    </div>
    :
      <img alt ="" className="loading-icon" src={LOADING_ICON_URL}></img>
  );
};

export default Mylocation;