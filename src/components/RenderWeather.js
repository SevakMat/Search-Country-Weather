import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import Icon from "./Icon";
import DropDown from './Dropdown';
import WeekDaysList from "./WeekDaysList";
import RenderHoursList from "./RenderHoursContent";
import { getPosition, getDataFropApi } from "../utils/service";
import { LOADING_ICON_URL } from "../utils/constants";

import Cityes from '../utils/Cityes';

const RenderWeather = () => {
  const { cityName } = useParams();
  const history = useHistory();

  const [ allValues, setAllValues ] = useState({
    listFromApi: null,
    loading: null,
    selectidDay: null,
  });
  
  const [ selectedCityName, setCityName ] = useState('');
  const [ isDaySelected, onDayChange ] = useState('');
  const { selectidDay, loading } = allValues;

  const OnCityChange = (value) => {
    history.push(`/weather/${value}`);
    onDayChange(false);
  };
  const getWeatherData = (e) => {
    setAllValues({
      ...allValues,
      loading: true
    });
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
            const { data: { city: { name }, list } } = resp;
            setAllValues({
              ...allValues,
              listFromApi: list,
              loading: false
            });
            setCityName(name);
          }).catch((error) => {
            console.log(error, "This is my error");
          });
      });
  };

  useEffect(() => {
    getWeatherData();
  }, [ cityName ]);

  if (loading) {
    return (
      <div className="loading-icon">
        <Icon url={LOADING_ICON_URL} />
      </div>
    );
  };
  
  const RenderCityName = () => {
    return (
      < div className="city-name" >
        { cityName ? cityName : `Your location is  ${selectedCityName}`}
      </div >
    );

  };
  return (
    <div>
      <DropDown options={Cityes} onChange={OnCityChange} />

      {RenderCityName()}
      <div className="contain">
        <WeekDaysList
          onDayChange={onDayChange}
          setAllValues={setAllValues}
          allValues={allValues}
        />
      </div>
      {isDaySelected && <RenderHoursList content={selectidDay} />}
    </div>
  );
};

export default RenderWeather;