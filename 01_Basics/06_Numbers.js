let bankBalance=1000
let newBankBalance=new Number(100)

console.log(bankBalance);//1000
console.log(newBankBalance);//[Number: 100]
console.log( bankBalance.toFixed(1));//1000.0 =>returns string
console.log(newBankBalance.toPrecision(2));
const lakhs=100000
console.log(lakhs.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);