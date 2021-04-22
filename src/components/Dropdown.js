import React from 'react';
import { PropTypes } from 'prop-types';

const DropDown = ({ options, onChange }) => {

  const renderlist = () => (
    options.map((item, i) => (
      <option to={item} key={i} defaultValue>{item}</option>
    ))
  );

  const handleChange = (e) => {
    const { target: { value } } = e;
    if (Object.values(options).includes(value)) {
      onChange(value);
    }
  };

  return (
    <>
      <input className="select-box" list="Citylist" onChange={handleChange} />
      <datalist id="Citylist">
        {renderlist()}
      </datalist>
    </>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.function
};

export default DropDown;
