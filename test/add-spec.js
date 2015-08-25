'use strict';

require('lazy-ass');
var check = require('check-more-types');

// es6
describe('add', function () {
  var add;
  beforeEach(function () {
    return add = require('../public/js/add');
  });
  it('is a function', function () {
    return la(check.fn(add), 'expected add function', add);
  });
  it('adds numbers', function () {
    return la(add(2, 3) === 5);
  });
});