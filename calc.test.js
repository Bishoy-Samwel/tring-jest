const calc = require('./calc');

describe('Calculator', () => {
  test('Add', () => {
    expect(calc.add(2,4)).toBe(6);
  });

  test('Subtract', () => {
    expect(calc.sub(2,4)).toBe(-2);
  });
  test('Multiply', () => {
    expect(calc.mul(2,4)).toBe(8);
  });

  test('Divide', () => {
    expect(calc.div(4,2)).toBe(2);
  });
});