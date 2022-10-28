const list = new Array('banana', 'maçã', 'laranja', 'goiaba', 'melão')

let n = 4 //os primeiros n elementos


function nLastElm(n){  
    for (let i = list.length-1; i >= list.length-n; i--) {
        console.log(list[i])   
    }
}

nLastElm(n)