const list = new Array('banana', 'maçã', 'laranja', 'goiaba', 'melão')

let n = 2 //os primeiros n elementos


function nFirstElm(n){  
    for (let i = 0; i < n; i++) {
        console.log(list[i])   
    }
}

nFirstElm(n)