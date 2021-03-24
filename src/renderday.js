import React from "react";
import './styles.css';

function Daycontent(props) {

  return (
  <div className = "daycontent">
    {
      props.content.map((item, i) => {
        return (
          <div className = "onehour" key={i}>
            {item.dt_txt.split(" ")[1] + ", Temp "}
            {Math.round(item.main.temp - 273.15) + "C"}
          </div>
        )
    })}
  </div>
  )
}
export default Daycontent;