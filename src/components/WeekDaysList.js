import React from 'react';
import PropTypes  from 'prop-types';

import WeekDayItem from "../components/WeekDayItem";

const WeekDaysList = (props) => {

  const { listFromApi } = props;

  if (!listFromApi) { return null; }

  return listFromApi.map((item, i) => {
    const { dt_txt } = item;
    if (!dt_txt.includes("15:00:00")) { return null; }

    return <WeekDayItem item={item} {...props} key={i} />;
  });
};

WeekDaysList.propTypes = {
  listFromApi: PropTypes.array
};

export default WeekDaysList;