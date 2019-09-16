const { odd, even } = require('./var');

function checkOddOrEven(num) {
    if (num % 2) { // 홀수면
       return  odd; 
    }
    return even;
}

module.exports = checkOddOrEven;  // 함수를 모듈로 내보냄
