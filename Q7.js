const arr = new Array('a', 2, 6.7, 6.7, 'b', 6.7, 8, 6.7, 'q', 6.7)

console.log(arr)

let item = null
let largerOccurrence = 0

for(let i = 0; i < arr.length; i++){
    let occurrence = 1;
    for(let j = i+1; j < arr.length; j++){
        if (arr[i] === arr[j]) occurrence++;
    }

    if(occurrence > largerOccurrence){
        item = arr[i]
        largerOccurrence = occurrence
    }
}

console.log(item + " aparece mais vezes.")