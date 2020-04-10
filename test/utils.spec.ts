import * as Utils from '../src/utils';

test('round 1.4 to 1', () => {
  expect(Utils.round(1.4, 0)).toBe(1);
});

test('round 1.6 to 2', () => {
  expect(Utils.round(1.6, 0)).toBe(2);
});

test('round 7.128 to 7.13', () => {
  expect(Utils.round(7.128, 2)).toBe(7.13);
});

test('create empty range', () => {
  expect(Utils.range(0)).toEqual([]);
});

test('create range from 0 to 0', () => {
  expect(Utils.range(1)).toEqual([0]);
});

test('create range from 0 to 1', () => {
  expect(Utils.range(2)).toEqual([0, 1]);
});

test('create range from 0 to 7', () => {
  expect(Utils.range(8)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
});

/*****************************************************************************/
/* generatePolynomialEquation                                                */
/*****************************************************************************/

test('generate equation "1"', () => {
  expect(Utils.generatePolynomialEquation([1])).toBe('1');
});

test('generate equation "2"', () => {
  expect(Utils.generatePolynomialEquation([2])).toBe('2');
});

test('generate equation "x"', () => {
  expect(Utils.generatePolynomialEquation([1, 0])).toBe('x');
});

test('generate equation "x + 1"', () => {
  expect(Utils.generatePolynomialEquation([1, 1])).toBe('x + 1');
});

test('generate equation "2*x - 2"', () => {
  expect(Utils.generatePolynomialEquation([2, -2])).toBe('2*x - 2');
});

test('generate equation "x^2"', () => {
  expect(Utils.generatePolynomialEquation([1, 0, 0])).toBe('x^2');
});

test('generate equation "2*x^2 + x"', () => {
  expect(Utils.generatePolynomialEquation([2, 1, 0])).toBe('2*x^2 + x');
});

test('generate equation "-6*x^2 + 3*x - 1"', () => {
  expect(Utils.generatePolynomialEquation([-6, 3, -1])).toBe('-6*x^2 + 3*x - 1');
});
