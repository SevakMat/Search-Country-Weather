import "./styles.css";

const Icon = ({
  className = '',
  url,
}) => (
  <div className={className}> 
    <img src={url} alt="" />
  </div>
);

export default Icon;