import WeekDayItem from "../components/WeekDayItem";

const WeekDaysList = (props) => {
  const { listFromApi } = props;
  if (!listFromApi) return null;

  return listFromApi.map((item, i) => {
    const { dt_txt } = item;
    if (!dt_txt.includes("15:00:00")) { 
      return null; 
    }

    return <WeekDayItem item={item} data={props} key={i} />;
  });
};

export default WeekDaysList;