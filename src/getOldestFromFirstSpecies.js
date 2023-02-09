const data = require('../data/zoo_data');

const getFirstAnimal = (id) => {
  const getEmployee = data.employees.filter((employee) => employee.id === id);
  const animalId = getEmployee[0].responsibleFor[0];
  return data.species.filter((specie) => specie.id === animalId);
};

const getOldestFromFirstSpecies = (id) => {
  const specie = getFirstAnimal(id);
  const sorted = specie[0].residents.sort((a, b) => b.age - a.age);
  return [sorted[0].name, sorted[0].sex, sorted[0].age];
};

module.exports = getOldestFromFirstSpecies;
