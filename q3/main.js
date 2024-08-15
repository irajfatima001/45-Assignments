"use strict";
//q3
let myName = "Iraj fatima";
console.log(myName.toUpperCase()); //uppercase
console.log(myName.toLowerCase()); //lowercase
//console.log(myName.charAt(0).toUpperCase()+myName.slice(1).toLowerCase()); 
console.log(myName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
