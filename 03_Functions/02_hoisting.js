//Note:- here we are using the function even before declaration.
const ans=multiplyTwoNumber(3,10)
console.log(ans);


function multiplyTwoNumber(num1,num2){
    return num1*num2;
}


//Error:- Cannot access 'multiplyByItself' before initialization
console.log(multiplyByItself(6));


//function expressions are not hoisted at top
const multiplyByItself=function(num){
    return num*num;
}
