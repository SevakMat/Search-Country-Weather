import React, { useState,useEffect } from 'react';
import { useParams } from "react-router";

import RenderHouersList from "./renderHouersContent";
import {getDataFropApi} from "../util/service";
import {LOADING_ICON_URL} from "../util/constante"
import WeekDaysList from "./WeekDaysList"

import './styles.css';

const RenderWeek = () => {

  const [ListFromApi, setListFromApi] = useState(null);
  const [selectidDay, setDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cityName } = useParams();

  const getWeatherData = async () => {
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
  };

  useEffect( () => {
    getWeatherData();
  }, [cityName]);

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
