import React,{ useState,useEffect } from 'react';
import { useParams } from "react-router";
import Daycontent from "./renderday";
import './styles.css';

const axios = require('axios');



function RenderWeek(props) {

  const [biglist, setList] = useState(null);
  const [dayweathers, setDay] = useState(null);
  const { cityName } = useParams();;


  useEffect( () => {
    if ( cityName !== "mylocation" ) {
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=538ff8f34128e4b016704672d5a146b7`)
        .then((response) => {

          setList(response.data.list);
        })
        .catch((error) => {
          console.log(error);
        })
  }
  }, []);

  let opendaycontent = (e) => {
    let daycontent = [];
    for (let i = 0; i < biglist.length; i++) {
      if (biglist[i].dt_txt.includes(e.target.innerHTML.split(" ")[1])) {
        daycontent.push(biglist[i]);
      };
    };
    setDay(daycontent);
  };

  return (cityName !== "mylocation" &&
    <div>
      <div className = "dayname">{ cityName }</div>
      {biglist &&
        biglist.map((item,i) => {
        return (item.dt_txt.includes("15:00:00") &&
          <div key = {i}>
            <div onClick ={opendaycontent} className = "oneweekday" >
              {"Data " + item.dt_txt.split(" ")[0] }
              {" Temp -" + Math.round(item.main.temp - 273.15) + "C"}
            </div>
          </div>
        )
      })}
      {dayweathers && <Daycontent content={dayweathers} />}
    </div>
  )
};

export default RenderWeek;