import React,{ useState,useEffect } from 'react';
import {useParams} from "react-router"
import Daycontent from "./renderday"
const axios = require('axios');


function RenderWeek(props) {
  const [biglist, setList] = useState(null);
  const [cityname, setCity] = useState(null);
  const [dayweathers, setDay] = useState(null);
  const {cityName} = useParams()


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=538ff8f34128e4b016704672d5a146b7`)
      .then((response) => {

        setList(response.data.list)
        setCity(props.city)
      })
     .catch((error) => {
       console.log(error);
     })
  }, [])

  let test = (e) => {
    let daycontent = [];
    for (let i = 0; i < biglist.length; i++){
      if (biglist[i].dt_txt.includes(e.target.innerHTML.split(" ")[1])) {
        daycontent.push(biglist[i])
      }
    }
    setDay(daycontent)
  }

    return (
      <div>
        <div>{cityname}</div>
        {biglist &&
          biglist.map((item,i) => {
          return (item.dt_txt.includes("15:00:00") &&
            <div key = {i}>
              <button onClick ={test}>
                {"Data " + item.dt_txt }
              {" //temp -" + Math.round(item.main.temp - 273.15)}
            </button>
            </div>
        )
          })}
        {dayweathers && <Daycontent content={dayweathers} />}

      </div>
    )
}

export default RenderWeek;