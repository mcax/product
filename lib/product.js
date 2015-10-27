/**
 * Require dependencies
 */

var Thing = require('mcax-thing');

// var Products = require('mcax-product-collection');

/**
 * Declare
 */

var Product;


/**
 * Extend Thing
 */

Product = Thing.extend({
    props: {
        //
        category    : 'string',
        productID   : 'string',
        // IndividualProduct
        serialNumber    : 'string',
        // physical characteristics
        depth   : 'number',
        height  : 'number',
        width   : 'number',
        weight  : 'number',
        color   : 'string',
        //
    },
    children: {
        //
        isVariantOf     : Product,
        predecessorOf   : Product,
        successorOf     : Product
    },
    collections: {
        // isAccessoryOrSparePartFor   : Products,
        // isConsumableFor             : Products,
        // isRelatedTo                 : Products,
        // isSimilarTo                 : Products
    }
});


/**
 * Expose `Product`
 */

module.exports = Product;

