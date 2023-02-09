const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');
const getEmployeeByName = require('./getEmployeeByName');

const getEmployeeById = (id) => data.employees.find((e) => e.id === id);

const getEspecificEmployeeCoverage = (employee) => {
  if (typeof employee === 'undefined') throw new Error('Informações inválidas');
  const object = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: [],
    locations: [],
  };
  // Popula a key species
  employee.responsibleFor.forEach((id) => object.species.push(getSpeciesByIds(id)[0].name));
  // Popula a key locations
  employee.responsibleFor.forEach((id) => object.locations.push(getSpeciesByIds(id)[0].location));
  // Retorna
  return object;
};

const getAllEmployeesCoverage = () => {
  const array = [];
  data.employees.forEach((employee) => array.push(getEspecificEmployeeCoverage(employee)));
  return array;
};

const getEmployeesCoverage = (param) => {
  if (!param) return getAllEmployeesCoverage();
  let employee;
  if (Object.keys(param).includes('name')) {
    employee = getEmployeeByName(param.name);
  }
  if (Object.keys(param).includes('id')) {
    employee = getEmployeeById(param.id);
  }
  return getEspecificEmployeeCoverage(employee);
};

module.exports = getEmployeesCoverage;
