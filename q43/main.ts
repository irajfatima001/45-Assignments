// //Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store it
//  in a separate array. Call show_magicians() with each array to show that you have one array of the original
//   names and one array with the Great added to each magician’s name.

let magicianNames: string[] = ["magician1", "magician2", "magician3", "magician4"]


function copy_array(arr: string[]): string[] {
    return [...arr]

}

let arrayCopy = copy_array(magicianNames)

function make_great(arr: string[]) {

    for (let i = 0; i < arr.length; i++) {
        arrayCopy[i] = `The great ${arr[i]}`
    }
}

make_great(arrayCopy)



function show_magicians(arr: string[]): string[] {
    return arr
}

console.log("orignal array: ", show_magicians(magicianNames));
console.log("Modified array: ", show_magicians(arrayCopy));