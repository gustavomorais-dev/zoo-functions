const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (typeof employeeName === 'undefined') return {};
  return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
};

module.exports = getEmployeeByName;
