const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Caso a função receba uma string diferente das especificadas, retorna nulo', () => {
    const expected = null;
    const actual = handlerElephants('zoo');

    expect(actual).toStrictEqual(expected);
  });
  it('Caso a função receba um parâmetro diferente de uma string, retorna a string Parâmetro inválido, é necessário uma string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(21);

    expect(actual).toStrictEqual(expected);
  });

  it('Caso a função não receba parâmetros, retorna undefined', () => {
    const expected = undefined;
    const actual = handlerElephants();

    expect(actual).toStrictEqual(expected);
  });

  it('Com o parâmetro count retorna a quantidade de elefantes', () => {
    const expected = 4;
    const actual = handlerElephants('count');

    expect(actual).toStrictEqual(expected);
  });

  it('Com o parâmetro names retorna retorna um array com a relação dos nomes de todos os elefantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');

    expect(actual).toStrictEqual(expected);
  });

  it('Com o parâmetro averageAge retorna a média de idade dos elefantes', () => {
    const expected = (11 + 15 + 12 + 4) / 4;
    const actual = handlerElephants('averageAge');

    expect(actual).toStrictEqual(expected);
  });

  it('Com o parâmetro location retorna a localização dos elefantes dentro do Zoológico', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');

    expect(actual).toStrictEqual(expected);
  });

  it('Com o parâmetro popularity retorna a popularidade dos elefantes', () => {
    const expected = 5;
    const actual = handlerElephants('popularity');

    expect(actual).toStrictEqual(expected);
  });

  it('Com o parâmetro availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const actual = handlerElephants('availability');

    expect(actual).toStrictEqual(expected);
  });
});
