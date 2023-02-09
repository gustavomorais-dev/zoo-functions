const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso a função não receba parâmetros, retorna o objeto esperado', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();

    expect(actual).toStrictEqual(expected);
  });

  it('Retorna string correta ao passar os argumentos Monday e 09:00-AM', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Monday', '09:00-AM');

    expect(actual).toStrictEqual(expected);
  });

  it('Retorna string correta ao passar os argumentos Tuesday e 09:00-AM', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('Tuesday', '09:00-AM');

    expect(actual).toStrictEqual(expected);
  });

  it('Retorna um erro ao passar um argumento dia inválido', () => {
    expect(() => getOpeningHours('Wed', '09:00-PM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Retorna um erro ao passar um argumento hora inválido', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-TM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Retorna um erro ao passar um argumento hora inválido', () => {
    expect(() => getOpeningHours('Wednesday', '0A:00-TM')).toThrow(/^The hour should represent a number$/);
  });

  it('Retorna um erro ao passar um argumento hora maior que 12', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Retorna um erro ao passar um argumento minutos maior que 59', () => {
    expect(() => getOpeningHours('Wednesday', '07:70-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
