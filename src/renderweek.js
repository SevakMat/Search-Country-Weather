import React, { Component } from 'react';
import Daycontent from "./renderday"

const axios = require('axios');


class RenderWeek extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list: null,
      city: null,
      day:null
    }
    this.test = this.test.bind(this)
  }


  componentDidMount = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=056260f3a8d2b570840586316e4da16a`)
      .then((response) => {
        this.setState({
          list: response.data.list,
          city: this.props.city
        })
      })
     .catch((error) => {
       console.log(error);
     })
  }
  test = (e) => {
    let daycontent = [];
    for (let i = 0; i < this.state.list.length; i++){
      if (this.state.list[i].dt_txt.includes(e.target.innerHTML.split(" ")[1])) {
        // console.log(this.state.list[i].dt_txt)
        daycontent.push(this.state.list[i].dt_txt)
      }
    }
    this.setState({day : daycontent})
  }

  render() {
    return (
      <div>
        <div>{this.state.city }</div>
        {this.state.list &&
          this.state.list.map((item) => {
          return (item.dt_txt.includes("15:00:00") &&
            <div>
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

export default RenderWeek;