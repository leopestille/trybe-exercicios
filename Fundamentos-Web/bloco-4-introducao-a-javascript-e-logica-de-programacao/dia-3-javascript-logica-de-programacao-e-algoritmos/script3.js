let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];

let menorPalavra = array[0];

for(let i = 0; i < array.length; i += 1) {
    if(array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    }
}

console.log(maiorPalavra);

for(let i = 0; i < array.length; i += 1){
    if(array[i].length < menorPalavra.length){
        menorPalavra = array[i];
    } 
}

console.log(menorPalavra);