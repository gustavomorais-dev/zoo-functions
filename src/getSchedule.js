const data = require('../data/zoo_data');

const isAnimal = (arg) => data.species.some((specie) => specie.name === arg);

const isDay = (arg) => data.hours[arg] !== undefined;

const filteredByAnimal = (scheduleTarget) => {
  const result = data.species.filter((specie) => specie.name === scheduleTarget)
    .map((specie) => specie.availability)[0];
  return result;
};

const getDaysObject = () => {
  const weekDays = {
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
    Monday: {},
  };
  return weekDays;
};

const getAllDaysInfos = () => {
  const weekDays = getDaysObject();
  Object.keys(weekDays).forEach((key) => {
    // Adiciona o officeHour
    const openH = data.hours[`${key}`].open;
    const closeH = data.hours[`${key}`].close;
    weekDays[key].officeHour = `Open from ${openH}am until ${closeH}pm`;
    // Adiciona o exhibition
    weekDays[key].exhibition = data.species.filter((s) => s.availability.includes(`${key}`))
      .map((s) => s.name);
    console.log(weekDays);
    // Trata uma execeção para dias fechados
    if (data.hours[`${key}`].open + data.hours[`${key}`].close === 0) {
      weekDays[key].officeHour = 'CLOSED';
      weekDays[key].exhibition = 'The zoo will be closed!';
    }
  });
  return weekDays;
};

const filteredByDay = (scheduleTarget) => {
  const allDaysInfos = getAllDaysInfos();
  // Filtra o objeto
  Object.keys(allDaysInfos).forEach((key) => {
    if (`${key}` !== scheduleTarget) {
      delete allDaysInfos[key];
    }
  });
  return allDaysInfos;
};

const getSchedule = (scheduleTarget) => {
  if (isAnimal(scheduleTarget)) {
    return filteredByAnimal(scheduleTarget);
  }
  if (isDay(scheduleTarget)) {
    return filteredByDay(scheduleTarget);
  }
  return getAllDaysInfos();
};

module.exports = getSchedule;
