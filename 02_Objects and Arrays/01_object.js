//2 ways to create object
//Object.create() --> singleton
const me = Object.create({
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      return 1
    },
  });

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      return 1
    },
  };
  

console.log(me);
console.log(person);
  
const hero={
    name:"Batman",
    power:"Rich",
    car:"Batmobile"
}
const hero1={
    name:"Batman",
    power:"Rich",
    car:"Batmobile",
    [Symbol("bat logo")]: "bat logo",
    "parents dead":"dead"
}
const heros=Object.assign(hero,{name:"Sufu"})
// console.log(hero);
console.log(heros); 

console.log(hero.car);
console.log(hero["car"]);
console.log(hero1["parents dead"]);