import axios from "axios";
import {APP_ADDRESS,APP_Id} from "./constante";

export const getData = (data)=>{
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

export const averageTemp = (item,weekContentList) => {
  const templist = [];

  weekContentList.map((elem)=>{
    if (elem.dt_txt.includes(item.split(" ")[0])) {
      templist.push(elem.main.temp);
    }
    return 0;
  });
  const sumOfWeekTemp = listElemSum(templist);
  const averagetemp = Math.round(sumOfWeekTemp / templist.length - 273.15);
  return averagetemp;
};

export const renderDayContent = (e,weekContentList) => {
  const daycontent = [];
  weekContentList.map(( item) => {
    const deyData = (e.dt_txt.split(" ")[0]);
    const hoursInList = item.dt_txt.includes(deyData);
    if (hoursInList) {
      daycontent.push(item);
    };
    return 0;
  });
  return daycontent;
};