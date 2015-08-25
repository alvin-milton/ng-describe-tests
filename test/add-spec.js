require('lazy-ass');
var check = require('check-more-types');
describe('add', function() {
    var add;
    beforeEach(function() {
        add = require('../add');
    });
    it('is a function', function () {
        la(check.fn(add), 'expected add function', add);
    });
});
