const data = require('../data/zoo_data');

const getSpeciesByIds = (...args) => {
  // seu código aqui
  let array = [];
  args.forEach((arg) => {
    data.species.forEach((specie) => {
      if (specie.id == arg) array.push(specie); 
    })
  });
  return array;
};

module.exports = getSpeciesByIds;
