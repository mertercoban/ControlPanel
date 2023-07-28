const url = require('url');

const address = 'https://www.btkakademi.gov.tr/portal/catalog?categoryId=353';

let result = url.parse(address, true);

console.log(result);
console.log(result.path);
console.log(result.query.year);
console.log(result.query.month);
