//q3

let myName : string = "Iraj fatima";
console.log(myName.toUpperCase()); //uppercase

console.log(myName.toLowerCase()); //lowercase

console.log(myName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));// titlecase

