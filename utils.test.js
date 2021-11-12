const utils = require('./utils')
 
test('factorial of 5', () => {
    expect(utils.factorial(5)).toBe('120');
  });