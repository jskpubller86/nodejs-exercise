const { odd, even } = require('./var2');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(module.exports === exports);

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
