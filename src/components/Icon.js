import "./styles.css";


const Icon = (props) =>{
  return <div className ={props.className}> 
    <img src ={props.url} alt=""/>
  </div>;
};export default Icon;