const data = require('../data/zoo_data');

const filterBySpecies = (species) => (data.species.filter((s) => s.name === species)[0]);

const countAnimals = (animal) => {
  // Adquire as keys passadas como parâmetro
  const keys = typeof animal !== 'undefined' ? Object.keys(animal) : [];
  // Declara o retorno
  let result;
  // Formata o retorno
  if (keys.includes('sex')) {
    const filteredBySpecies = filterBySpecies(animal.species);
    const filteredBySex = filteredBySpecies.residents.filter((r) => r.sex === animal.sex);
    result = filteredBySex.length;
  } else if (keys.includes('species')) {
    const filteredBySpecies = filterBySpecies(animal.species);
    result = filteredBySpecies.residents.length;
  } else {
    result = {};
    data.species.forEach((specie) => { result[specie.name] = specie.residents.length; });
    console.log('wtf');
  }
  return result;
};

module.exports = countAnimals;
