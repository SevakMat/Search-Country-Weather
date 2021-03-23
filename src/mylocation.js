import React, { Component } from "react"
import Daycontent from "./renderday"

const axios = require('axios');


class Mylocation extends Component{
  constructor(props) {
    super(props)
    this.state = {
      city: null,
      list: null,
      day:null
    }
  }

  componentDidMount = () => {
    let geoSuccess = (position) => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=538ff8f34128e4b016704672d5a146b7`)
      .then((response) => {
        this.setState({
          list: response.data.list,
          city:response.data.city.name
        })

    })
    .catch((error) => {
      console.log("this is error",error);
    })

    };
    var geoError = (position) => {
      console.log("geoerror");
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }

  test = (e) => {
    let daycontent = [];
    for (let i = 0; i < this.state.list.length; i++){
      if (this.state.list[i].dt_txt.includes(e.target.innerHTML.split(" ")[1])) {
        daycontent.push(this.state.list[i])
      }
    }
    this.setState({day: daycontent})
  }

  render() {
    return (

      <div>
        <div>{this.state.city }</div>
        {this.state.list &&
        this.state.list.map((item,i ) => {
          return (item.dt_txt.includes("15:00:00") &&
            <div key={i} >
              <button onClick ={this.test}>
                {"Data " + item.dt_txt }
                {" //temp -" + Math.round(item.main.temp - 273.15)}
              </button>
            </div>
        )
        })}
      {this.state.day && <Daycontent content={this.state.day} />}
      </div>
    )
  }
}
export default Mylocation