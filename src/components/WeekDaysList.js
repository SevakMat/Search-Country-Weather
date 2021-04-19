import WeekDayItem from "../components/WeekDayItem"


const WeekDaysList = (props) =>{
  if (!props.ListFromApi) { return 0; }
  return props.ListFromApi.map(( item,i) => {
    const {dt_txt }= item;
    if (!dt_txt.includes("15:00:00")) { return null; }
    
    return <WeekDayItem item = {item} data={props} key={i}/>

  
  })
}
export default WeekDaysList;

