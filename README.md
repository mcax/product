# Product

Model of any offered product.

## Installation


```sh
$ npm install mcax-product --save
```

## Usage

~~~js
var Product = require('mcax-product');

var data = {
        name: 'Star',
        description: 'A star is a luminous sphere of plasma.',
        sameAs: 'https://en.wikipedia.org/wiki/Star'
    };

var product = new Product(data);
~~~

## Tests

Run tests with Mocha

~~~sh
$ make test
~~~


## Check

- <https://schema.org/Product>
- <https://schema.org/ProductModel>
- <https://schema.org/IndividualProduct>
- <https://schema.org/SomeProducts>


## License

The MIT License
