//q15

let guestList: string[] = ["Fatima", "Nida", "Areesha"]

let message: string = "You are invited for dinner."

for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
    
}

let guest: string = guestList[2]
console.log("\nSorry," + `${guest}` + " can't come for dinner.");

guestList.splice(2, 1, `Alina`)
console.log(guestList)

let newguestList = guest

let message1: string = "You are invited for dinner."

for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
    

}

console.log("\n we found a bigger table");

guestList.unshift("Ayesha")

guestList.splice(2,0,"Aiza")

guestList.push("Hania")

for (let i = 0; i < guestList.length; i++) {
    console.log("Miss " + guestList[i] + ',' + '' + message);
    

}









