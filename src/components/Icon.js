const Icon = ({ className = "", url }) => {
  return (
    <img className={className}
      src={url} alt=""
    />
  );
};

export default Icon;