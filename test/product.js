var assert = require('assert');

var Product = require('..');

describe('Product', function() {

    it('should exist', function() {
        assert.ok(Product);
    });


    it('should accept input', function() {
        var product = new Product({ name: 'Sony D5833' });
    });
});
