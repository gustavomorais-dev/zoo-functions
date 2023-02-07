const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const object = { child: 0, adult: 0, senior: 0 };
  object.child = entrants.filter((entrant) => entrant.age < 18).length;
  object.adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  object.senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return object;
};

const calculateEntry = (entrants) => {
  if ((!entrants || !entrants.keys)) return 0;
  const entrantsObj = countEntrants(entrants);
  let sum = 0;
  sum += entrantsObj.child * data.prices.child; // Child
  sum += entrantsObj.adult * data.prices.adult; // Adult
  sum += entrantsObj.senior * data.prices.senior; // Senior
  return parseFloat(sum.toFixed(2));
};

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(countEntrants(entrants));
console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
