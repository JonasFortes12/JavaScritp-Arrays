let arr1 = new Array(2, 54, 67, 128, 30, 12, 35.5, 90.2)
let arr2 = new Array(89, 2, 54, 21, 81, 27, 2.7, 9.2)
let arr3 = new Array()

for(let i = 0; i < arr1.length; i++){
    arr3.push(arr1[i]+arr2[i])
}

console.log(arr3)
