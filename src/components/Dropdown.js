import React from 'react';
import { useHistory } from "react-router-dom";

import Cyties from '../util/Cyties';

import './styles.css';

const DropDown = () => {

  const history = useHistory();
  const selectCity = (e) => {
    const{target:{value}} = e;
    history.push(`/weather/${value}`);
  };

  const dropdownRender = () => {
    return <select className="select-box" onChange={selectCity}>
      {Cyties.map((item, i) => {
        return <option to={item} key={i} defaultValue>{item}</option>;
      })}
    </select>;
  };

  return dropdownRender();
};
export default DropDown;
