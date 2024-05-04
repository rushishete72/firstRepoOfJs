/*
  1]
  primative
  -String
  -Number
  -Boolean
  -null
  -undefined
  -Symbol
  -BigInt



2]
Reference (Non Primative)
   -Array
   -Objects
   - Functions
*/


//primative
const score=100
const Scorevalue=100.3

const isLoggedIn=false;
const outsideTemp=null;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id==anotherId);
console.log(typeof(id,anotherId));




//non primative
const heros=["shaktiman","spiderman","mary"];
 
let myObj={
    name:"rushi",
    age:23,
}

    let myFunctions=function(){
        console.log("hellow world");
    }


    console.log(typeof myFunctions);

// Stsck  (Premative), Heap (non Premative)



