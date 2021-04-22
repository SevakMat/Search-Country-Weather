export const renderDayContent = (e, listFromApi) => {
  return listFromApi.filter((item) => {
    const { dt_txt } = e;
    const deyData = (dt_txt.split(" ")[0]);
    return item.dt_txt.includes(deyData);
  });
};