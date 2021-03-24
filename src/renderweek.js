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

  let averagetemp = (item) => {
    let templist =[];
    biglist.map((elem ) => {
      if (elem.dt_txt.includes(item.split(" ")[0])) {
        templist.push(elem.main.temp)
      }
    })
    let sumoftemp = templist.reduce(function(a, b){
      return a + b;
    }, 0);
    return Math.round(sumoftemp / templist.length - 273.15)
  }

  return (cityName !== "mylocation" &&
    <div>
    <div className="cityname">
      <div >
        {cityName}
      </div>
      </div>
      {biglist &&
        biglist.map((item,i) => {
        return (item.dt_txt.includes("15:00:00") &&
          <div key = {i}>
            <div onClick ={opendaycontent} className = "oneweekday" >
              {"Data " + item.dt_txt.split(" ")[0] }
            {" Temp- " + averagetemp(item.dt_txt) + "C"}
            {}
            </div>
          </div>
        )
      })}
      {dayweathers && <Daycontent content={dayweathers} />}
    </div>
  )
};

export default RenderWeek;