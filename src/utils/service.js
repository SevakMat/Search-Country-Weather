import axios from "axios";

import { APP_ADDRESS, APP_Id } from "./constants";

export const getDataFropApi = (data) => {
  let url;
  if (data.city) {
    url = `${APP_ADDRESS}?q=${data.city}&appid=${APP_Id}`;
  } else {
    url = `${APP_ADDRESS}?lat=${data.x}&lon=${data.y}&appid=${APP_Id}`;///var
  }
  return new Promise((resolve) => {
    axios.get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("axios error", error);
      });
  });
};

export const getPosition = (cityName) => {

  return !cityName ? new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      resolve(data);
    }, (err) => {
      reject(err);
    });
  }) : { coords: { latitude: '', longitude: '' } };
};