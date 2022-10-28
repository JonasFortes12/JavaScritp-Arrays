
const array = [1, 2, 3, 5, 7] 

function cloneArray(arr) {
    
    const array2 = new Array()
    
    for(const element of arr){
        array2.push(element)
    }
    return array2  
}

console.log(cloneArray(array))

