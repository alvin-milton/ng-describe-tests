'use strict';

require('lazy-ass');
var check = require('check-more-types');

// es6
describe('multiply', function () {
  var multiply;
  beforeEach(function () {
    return multiply = require('../multiply');
  });
  it('is a function', function () {
    return la(check.fn(multiply), 'expected add function', multiply);
  });
  it('multiplies numbers', function () {
    return la(multiply(2, 3) === 6);
  });
});