require('lazy-ass');
var check = require('check-more-types');

// es6
describe('multiply', () => {
  var multiply;
  beforeEach(() => multiply = require('../public/js/multiply'));
  it('is a function', () => la(check.fn(multiply), 'expected add function', multiply));
  it('multiplies numbers', () => la(multiply(2,3) === 6));
});
