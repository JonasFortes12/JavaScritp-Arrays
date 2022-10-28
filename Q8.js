let arr = new Array('a', 2, 6.7, 6.7, 'b', 6.7, 8, 6.7, 'q', 6.7, 'A').map(upper)

function upper(value){
    if(typeof value === "string") return value.toUpperCase()
    else return value
}

for(let i = 0; i < arr.length; i++){

    for(let j = i+1; j < arr.length; j++){
        if (arr[i] === arr[j]) arr.splice(j, 1)
    }
}

console.log(arr)
