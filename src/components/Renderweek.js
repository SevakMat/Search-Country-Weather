import React, { useState,useEffect,useCallback } from 'react';
import { useParams } from "react-router";

import RenderHouersList from "./renderHouersContent";
import {getDataFropApi} from "../utils/service";
import {LOADING_ICON_URL} from "../utils/constants"

import WeekDaysList from "./WeekDaysList"

import './styles.css';

const RenderWeek = () => {

  const [ListFromApi, setListFromApi] = useState(null);
  const [selectidDay, setDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cityName } = useParams();

  const getWeatherData = useCallback(  async (e) => {
    console.log(e)
    const data = {city:cityName};

    try{
      var resp = await getDataFropApi(data);//var  
    }catch(e){
      console.log(e)
    }
    const {data:{list}}=resp;
    setListFromApi(list);
    setDay(null);
    setLoading(false);
  },[cityName]);

  useEffect( () => {
    getWeatherData();
  }, [cityName,getWeatherData]);

const test = (qqq)=>{
    setDay(qqq)
}

  return (cityName !== "mylocation" &&
   !loading?
      <div>
        <div className="city-name">
          {cityName}
        </div>
        <div className="contain">
        <WeekDaysList ListFromApi={ListFromApi} test={test}/>
        </div>
        {selectidDay && <RenderHouersList content={selectidDay} />}
      </div>
      :
      <img className="loading-icon" alt ="" src={LOADING_ICON_URL}></img>
  );
};

export default RenderWeek;
