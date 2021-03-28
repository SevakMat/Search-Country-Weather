import React from 'react';
import { useHistory } from "react-router-dom";

import Cyties from './Cyties';

import './styles.css';

const DropDown = () => {

  const history = useHistory();
  const selectCity = (e) => {
    console.log(e.target.value);
    history.push(`/weather/${e.target.value}`);
  };

  const dropdownRender = () => {
    return <select className="select-box" onChange={selectCity}>
      <option>select city</option>
      {Cyties.map((item, i) => {
        return (
          <option to={item} key={i} >{item}</option>
        );
      })}
    </select>;
  };

  return (
    <div>
      <div >
        {dropdownRender()}
      </div>
    </div>
  );
};
export default DropDown;
