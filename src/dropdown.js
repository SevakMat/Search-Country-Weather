import React from 'react';
import { useHistory } from "react-router-dom";

import Cyties from './Cyties';

import './styles.css';

const DropDown = () => {

  const history = useHistory();
  const selectCity = (e) => {
    history.push(`/weather/${e.target.value}`);
  };

  const dropdownRender = () => {
    return <select className="select-box" onChange={selectCity}>
      {Cyties.map((item, i) => {
        return (
          <option to={item} key={i} defaultValue>{item}</option>
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
