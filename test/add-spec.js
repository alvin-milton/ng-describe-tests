require('lazy-ass');
var check = require('check-more-types');

// es6
describe('add', () => {
  var add;
  beforeEach(() => add = require('../add'));
  it('is a function', () => la(check.fn(add), 'expected add function', add));
  it('adds numbers', () => la(add(2,3) === 5));
});
