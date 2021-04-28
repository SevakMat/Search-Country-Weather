import React from 'react';
import PropTypes from 'prop-types';


const DropDown = ({ options, onChangeValue }) => {

  const renderlist = () => (
    options.map((item, i) => (
      <option to={item} key={i} defaultValue>{item}</option>
    ))
  );

  return (
    <>
      <input className="select-box" list="Citylist" onChange={onChangeValue} />
      <datalist id="Citylist">
        {renderlist()}
      </datalist>
    </>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  onChangeValue: PropTypes.function
};

export default DropDown;
