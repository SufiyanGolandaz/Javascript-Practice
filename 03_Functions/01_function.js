//multiple ways to define a function

//1. using function declaration-hoisted at top
function multiplyTwoNumber(num1,num2){
    return num1*num2;
}

const ans=multiplyTwoNumber//[Function: multiplyTwoNumber]
const value=multiplyTwoNumber()//NaN
const value1=multiplyTwoNumber(3,"10")//30

// console.log(ans);
// console.log(value);
// console.log(value1);

//2.using function expression-not hoisted at top

//Note changes to an object & array inside function is reflected globally
const processObject=function (anyObject,arr){
    anyObject.name1="batman"
    arr[0]=1
    return {anyObject,arr}
}

//3.arrow function
//explicit return
const sumTwoNumbers=(num1,num2)=>{
    return num1+num2
} 


console.log(sumTwoNumbers(7,8));//15

//implicit return
const sumTwoNumbers1=(num1,num2)=> num1+num2
//curly braces for object
const returnObj=()=>({name1:"Batman"})

console.log(returnObj());


console.log(processObject({
    name1:"Hi",
    price:100
},[100,2,3,4,5]));
//{ anyObject: { name1: 'batman', price: 100 }, arr: [ 1, 2, 3, 4, 5 ] }
//we passed name:"Hi", it changed to batman
//we passed [100,2,3,4,5], it changed to [1,2,3,4,5]