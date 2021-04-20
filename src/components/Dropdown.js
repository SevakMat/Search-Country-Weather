import React from 'react';

const DropDown = ({
  options,
  onChnage,
}) => {

  // const history = useHistory();
  // const selectCity = (e) => {
  //   const { target: { value } } = e;
  //   if (Object.values(Cyties).includes(value)) {
  //     history.push(`/weather/${value}`);
  //   }
  // };
  // 400

  const renderlist = () => (
    options.map((item, i) => (
      <option to={item} key={i} defaultValue>{item}</option>
    ))
  );

  const handleChange = (e) => {
    const { target: { value } } = e;

    if (Object.values(options).includes(value)) {
      onChnage(value);
    }
  };

  return (
    <>
      <input type="text" className="select-box" list="cars" onChange={handleChange} />
      <datalist id="cars">
        {renderlist()}
      </datalist>
    </>
  );
};
export default DropDown;
