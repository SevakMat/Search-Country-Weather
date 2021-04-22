import React from "react"
import { PropTypes } from 'prop-types';


const Icon = ({ className = "", url }) => {
  return (
    <img className={className}
      src={url} alt=""
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string
};

export default Icon;