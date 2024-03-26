"use strict";// treat the foll JS code as newer version

/* 7 Primitive data types:-
    1.number
    2.string
    3.boolean
    4.undefined
    5.bigint
    6.null
    7.Symbol
*/

let age=18
let name1="Batman"
let isParentsAlive=false
let id=Symbol('random_value')
let ageValue=20n

console.log(typeof age) //number
console.log(typeof name1)//string
console.log(typeof isParentsAlive);//boolean
console.log(typeof ageValue);//bigint
console.log(typeof id);//symbol
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof NaN);//number

/* 3 Non-Primitive Data Types:
    1.array
    2.function
    3.object
*/

let assets=["hotels","hospitals"]
let myFunc=function(){
    console.log("inside myFunction");
}
let myObj={
    name:"batman",
    home:"destroyed"
}
console.log(typeof assets);// object
console.log(typeof myFunc);//function
console.log(typeof myObj);//object
