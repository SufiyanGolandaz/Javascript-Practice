
var f1_team=["Charles","Max","Lewis"]
var cricket_team=["Kohli","Dhoni","Sachin"]

// f1_team.push(cricket_team);// [ 'Charles', 'Max', 'Lewis', [ 'Kohli', 'Dhoni', 'Sachin' ] ]

// console.log(f1_team);

// var mix_team=f1_team.concat(cricket_team)//[ 'Charles', 'Max', 'Lewis', 'Kohli', 'Dhoni', 'Sachin' ]
// console.log(mix_team);

var a=Array.of(7)//[ 7 ]
var a1=new Array(7)// [ <7 empty items> ]
console.log(a);

console.log(a1);

var tryfoo=Array.of("foo")//[ 'foo' ]

var tryfoo_from=Array.from("foo")//

console.log(tryfoo);
console.log(tryfoo_from);

var nested_arr=Array(1,2,3,4,[100,2,3,4,5,5],[[101,2],103])

var flat_arr=nested_arr.flat(Infinity)
console.log(flat_arr);