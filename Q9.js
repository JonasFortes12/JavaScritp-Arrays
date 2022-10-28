let arr1 = new Array(2, 54, 67, 128, 30, 12, 35.7, 90.2)
let arr2 = new Array(89, 2, 54, 21, 81, 27, 2.7, 9.2)
let arr3 = new Array(arr1.length)

function sumArrs(value, index){
    value = arr1[index] + arr2[index]
    return value
}

arr3.forEach(sumArrs)

console.log(arr3)


    
    
