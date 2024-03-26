import { Circle, Triangle, Square } from './shapes';

// Test for Circle class
test('Circle renders correctly', () => {
  const circle = new Circle();
  circle.setColor('blue');
  expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
  );
});

// Test for Triangle class
test('Triangle renders correctly', () => {
  const triangle = new Triangle();
  triangle.setColor('yellow');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

// Test for Square class
test('Square renders correctly', () => {
  const square = new Square();
  square.setColor('red');
  expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="purple" />'
  );
});