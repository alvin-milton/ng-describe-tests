require('lazy-ass');
var check = require('check-more-types');

// es5
// describe('add', function() {
//     var add;
//     beforeEach(function() {
//         add = require('../add');
//     });
//     it('is a function', function () {
//         la(check.fn(add), 'expected add function', add);
//     });
// });

// es6
describe('add', () => {
  var add;
  beforeEach(() => add = require('../add'));
  it('is a function', () => la(check.fn(add), 'expected add function', add));
});
