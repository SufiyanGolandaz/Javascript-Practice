let noOfCars=20


let stringNoofCars=String(noOfCars) // number to string
console.log(typeof stringNoofCars)// string
console.log(stringNoofCars)//20

let bigIntCars=BigInt(noOfCars)// number to bigint
console.log(typeof bigIntCars);//bigint
console.log(bigIntCars);//20n

let booleanValue=Boolean(noOfCars)//number to boolean
console.log(booleanValue);//true

let isBroke=false
let howmuchBroke=Number(isBroke)
console.log(howmuchBroke);//0

//operator precedence 

console.log(1+2+3+"2")//62=>string
console.log("1"+2+3)//123
console.log(1+"2"+3);//123
//console.log(bigIntCars+2); //error, since cannot add bigint and number