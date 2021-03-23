import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Cities from './list';



function DropDown() {
  let history = useHistory();

  function selectCity(e) {
    history.push(`/${e.target.value}`);

  }
  return (
      <div>
        <select onChange ={selectCity}>
          <option>select city</option>
          {Cities.map((item , i) => {
            return (
                <option to={item} key ={i}>{item}</option>
            )
          })}
        </select>
        <div>
          <NavLink to="mylocation">myLocation</NavLink>
        </div>
      </div>
    );
}
export default DropDown;
