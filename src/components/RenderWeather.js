import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";

import Icon from "./Icon";
import DropDown from './Dropdown';
import WeekDaysList from "./WeekDaysList";
import RenderHoursList from "./RenderHoursContent";
import { getPosition, getDataFropApi } from "../utils/service";
import { LOADING_ICON_URL } from "../utils/constants";
import {setListFromApi} from "../reducers/reposReducer";

import Cities from '../utils/Cities';

const RenderWeather = () => {

  const selectidDay = useSelector(state => state.selectidDayData.selectidDayData);
  const dispatch = useDispatch();
  const { cityName } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState('');
  const [selectedCityName, setCityName] = useState('');
  const [isDaySelected, onDayChange] = useState(null);

  const onCityChange = (e) => {
    const { target: { value } } = e;
    if (Object.values(Cities).includes(value)) {
      history.push(`/weather/${value}`);
      onDayChange(false);
    }
  };
  
  const getWeatherData = async () => {
    setLoading(true);
    let data = null;

    if (!selectidDay) {
      const position = await getPosition(cityName);
      const { coords: { latitude, longitude } } = position;
      data = {
        x: latitude,
        y: longitude
      };
    } else {
      data = {
        city: cityName,
      };
    }

    const resp = await getDataFropApi(data);
    const { data: { city: { name }, list } } = resp;
    setLoading(false);
    dispatch(setListFromApi(list));
    setCityName(name);
  };

  useEffect(() => {
    getWeatherData();
  }, [cityName]);

  const renderCityName = () => {
    return (
      < div className="city-name" >
        { cityName ? cityName : `Your location is  ${selectedCityName}`}
      </div >
    );
  };

  if (loading) {
    return (
      <div className="loading-icon">
        <Icon url={LOADING_ICON_URL} />
      </div>
    );
  }

  return (
    <div>
      <DropDown options={Cities} onChangeValue={onCityChange} />
        {renderCityName()}
      <div className="contain">
        <WeekDaysList
          onDayChange={onDayChange}
        />
      </div>
      {isDaySelected && <RenderHoursList content={selectidDay} />}
    </div>
  );
};

export default RenderWeather;