import React from 'react';
import { useHistory } from "react-router-dom";

import Cyties from '../utils/Cyties';

import './styles.css';

const DropDown = () => {

  const history = useHistory();
  const selectCity = (e) => {
    const{target:{value}} = e;
    if (Object.values(Cyties).includes(value)) {
      history.push(`/weather/${value}`);
    }
  };

  const dropdownRender = () => {
    return (<>
      <input type="text"  className="select-box" list="cars" onChange={selectCity}/>
      <datalist id ="cars">
        {Cyties.map((item, i) => {
          return <option to={item} key={i} defaultValue>{item}</option>;
        })}
      </datalist>
      </>
    );
  };

  return dropdownRender();
};
export default DropDown;
