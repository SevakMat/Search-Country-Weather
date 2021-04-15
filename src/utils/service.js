import axios from "axios";

import {APP_ADDRESS,APP_Id} from "./constants";


export const getDataFropApi = (data)=>{
  let url;
  if(data.city){
    url = `${APP_ADDRESS}?q=${data.city}&appid=${APP_Id}`
  }else{
    url = `${APP_ADDRESS}?lat=${data.x}&lon=${data.y}&appid=${APP_Id}`///var
  }
    return new Promise((resolve,reject)=>{
      axios.get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("axios error",error);
      });
  
    })
};

export const getPosition = () => {

  return new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition((data)=>{
      resolve(data)
    }, (err)=>{
      reject(err)
    });
  })
};

const listElemSum = (templist) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return templist.reduce(reducer)
};

export const averageTemp = (item,ListFromApi) => {
  const templist = [];
  ListFromApi.map((elem)=>{
    if (elem.dt_txt.includes(item.split(" ")[0])) {
      templist.push(elem.main.temp);
    }
    return 0;
  });
  const sumOfWeekTemp = listElemSum(templist);
  const averagetemp = Math.round(sumOfWeekTemp / templist.length - 273.15);
  return averagetemp;
};

export const renderDayContent = (e,ListFromApi) => {
  return ListFromApi.filter(( item) => {
    const deyData = (e.dt_txt.split(" ")[0]);
    return item.dt_txt.includes(deyData);
  });
};

