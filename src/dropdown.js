import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Cities from './list';
import './styles.css';



function DropDown() {

  let history = useHistory();
  function selectCity(e) {
    history.push(`/${e.target.value}`);
  }

  return (
    <div className="firstPageContent">
      <div >
        <select className = "selectbox" onChange = {selectCity}>
          <option>select city</option>
          {Cities.map((item , i) => {
            return (
                <option to={ item } key={ i } >{item}</option>
            )
          })}
        </select>
      </div>
    </div>
  );
}
export default DropDown;
