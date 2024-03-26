var myarr=[1,2,3,44,5,6,7,7]

const myarr1=new Array(1,2,3,4,5,5,6)

// console.log(myarr[0]);
// console.log(myarr1[0]);

// myarr.push(8)
// myarr1.pop()

// myarr1.unshift(9)//add number at start
// myarr.shift()

// console.log(myarr);
// console.log(myarr1);

console.log("array before slice", myarr);
const newArray1=myarr.slice(2,4)
console.log("silced elements", newArray1);
console.log("array after slice", myarr);

console.log("array before splice", myarr);
const newArray2=myarr.splice(2,4)
console.log("silced elements", newArray2);
console.log("array after splice", myarr);

