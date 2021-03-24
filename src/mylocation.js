import React, { useState,useEffect } from "react"
import Daycontent from "./renderday"
import "./styles.css"

const axios = require('axios');


function Mylocation (){

  const [list, setList] = useState(null);
  const [city, setCity] = useState(null);
  const [day, setDay] = useState(null);


 
  useEffect(() => {
    let geoSuccess = (position) => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=538ff8f34128e4b016704672d5a146b7`)
      .then((response) => {
        setList(response.data.list)
        setCity(response.data.city.name)

    })
    .catch((error) => {
      console.log("this is error",error);
    })

    };
    let geoError = (position) => {
      console.log("geoerror");
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }, []);

  let opendaycontent = (e) => {
    let daycontent = [];
    list.map((item) => {
      if (item.dt_txt.includes(e.target.innerHTML.split(" ")[1])) {
        daycontent.push(item);
      }
    });
    setDay(daycontent);
  };

  return (
    <div>
      <div className = "cityname" >{"Your location is "+city }</div>
      {list &&
        <div className = "weekdayscontent">
        {list.map((item,i ) => {
          return (item.dt_txt.includes("15:00:00") &&
            <div key={i}>
              <div onClick ={opendaycontent}  className = "oneweekday">
                {"Data " + item.dt_txt.split(" ")[0] }
                {" temp -" + Math.round(item.main.temp - 273.15) + "C"}
              </div>
            </div>
          )
        })}
      </div>
      }
      {day && <Daycontent content={day} />}
    </div>
  )
}
export default Mylocation;