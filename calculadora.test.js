import Calculadora from './calculadora';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('product 0 * 20  equals 0', () => {
    expect(multiplicacion(0, 20)).toBe(0);
});