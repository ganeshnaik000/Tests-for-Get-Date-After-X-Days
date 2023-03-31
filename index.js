const addDays = require("date-fns/addDays");

const getDate = (days) => {
  const newDays = addDays(new Date(2020, 7, 22), days);
  return `${newDays.getDate()}-${
    newDays.getMonth() + 1
  }-${newDays.getFullYear()}`;
};

module.exports = getDate;
console.log(getDate(2));
