const Calculadora = require('./calculadora');

const { suma, resta, division, multiplicacion} = new Calculadora();

test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('resta 3 - 2 es igual a 1', () => {
    expect(resta(3, 2)).toBe(1);
});

test('divide 6 / 2 es igual a 3', () => {
    expect(division(6, 2)).toBe(3);
});

test('multiplica 3 * 2 es igual a 6', () => {
    expect(multiplicacion(3, 2)).toBe(6);
});