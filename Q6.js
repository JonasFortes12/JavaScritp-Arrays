let num = 1025468

let arrNum = num.toString().split("").map(Number)// Number funciona como um método de casting?

function isEven(num) {
    if(num%2==0) return true
    else return false
}

for (let i = 0; i < arrNum.length-1; i++) {
    
    if(isEven(arrNum[i]) && isEven(arrNum[i+1]))
        arrNum.splice(i+1, 0, "-")
}

arrNum = arrNum.join("")

console.log(arrNum)  

