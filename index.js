let arr = require('./test');
let sum = 0;
for (let elem of arr){
    sum += +elem;
}
console.log(sum);