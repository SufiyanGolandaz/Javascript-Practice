let newString=new String('Trying out new keyword')
let letString="initilaizing from let"

console.log(newString.trim());
console.log(letString.split(" "));//[ 'initilaizing', 'from', 'let' ]

const url="https://localhost:3030/home?search=power%20bank"

console.log(url.includes('home'));//true
console.log(url.replace('%20'," "));//https://localhost:3030/home?search=power bank

console.log(newString.substring(1,5));//ryin
console.log(newString.slice(-7,-4));//key