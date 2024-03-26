//Immediately invoked Functions(IIFE)
let user="Batman";

//named iife
(function iife(){
    console.log("Hi from iife");
})();
// ; is necessary because it will not get the context

((name1)=>{
    console.log(`Hi ${name1} from anonymous function`);
})("Batman");

((name1)=>{
    console.log(`Hi ${name1} from anonymous function`);
})(user);