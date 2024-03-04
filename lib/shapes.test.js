import { Circle, Triangle, Square } from './shapes';

// Test for Circle class
test('Circle renders correctly', () => {
  const circle = new Circle();
  circle.setColor('blue');
  expect(circle.render()).toEqual('<circle cx="100" cy="50" r="40" fill="blue" />');
});

// Test for Triangle class
test('Triangle renders correctly', () => {
  const triangle = new Triangle();
  triangle.setColor('yellow');
  expect(triangle.render()).toEqual('<triangle cx="100" cy="50" r="40" fill="yellow" />');
});

// Test for Square class
test('Square renders correctly', () => {
  const square = new Square();
  square.setColor('red');
  expect(square.render()).toEqual('<square cx="100" cy="50" r="40" fill="red" />');
});