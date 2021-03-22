import React, { Component } from "react";

class Daycontent extends Component{

  render() {
    return (
      this.props.content.map((item,i) => {
        return (
          <div key = {i} >{item}</div>
        )
      })
    )
  }
}
export default Daycontent;