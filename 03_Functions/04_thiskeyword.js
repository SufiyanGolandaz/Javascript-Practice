const user={
    username:"Bruyce Wayne",
    price:"1000",

    welcomefunction: function(){
        console.log(`${this.username} from welcome function`);
        return this
    }
}
// console.log(user.welcomefunction());

function testThisinFunction(){
    console.log(this);
}

const arrowFunc=()=>{
    console.log(this);
}
testThisinFunction()
//

//returns {} since arrow function is not bounded
arrowFunc()


//since it is node js
//for browser it is the window
console.log(this);