const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const getSpecie = data.species.find((specie) => specie.name === animal);
  return getSpecie.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
