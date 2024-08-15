//q42


let magiciansNames: string[]=['magician1','magician2','magician3','magician4']

function make_great(arr:string[]){
    for(let i=0; i<arr.length; i++){
        magiciansNames[i] = "The great  "+ arr[i];
        

    }
}
make_great(magiciansNames)
console.log(magiciansNames);
