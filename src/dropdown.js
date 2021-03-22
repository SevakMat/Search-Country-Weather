import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import Cities from './list';
 
class DropDown extends Component {
  render() {
    return (
      <div>
        {Cities.map((item) => {
          return (
            <div key={item} >
              <NavLink to={item}>{item}</NavLink>
            </div>
          )
        })}
        <div>
          <NavLink to="mylocation">myLocation</NavLink>
        </div>
      </div>
    );
  }
}
export default DropDown;
