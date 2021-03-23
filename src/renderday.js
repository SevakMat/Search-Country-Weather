import React from "react";

function Daycontent(props) {
  // get list of one days ., in list mast be weather and data

   return (
    props.content.map((item,i) => {
      return (
        <div key={i} >
          {item.dt_txt + "--"}
          {Math.round(item.main.temp - 273.15)}
        </div>
        
      )
    })
  )
}
export default Daycontent;