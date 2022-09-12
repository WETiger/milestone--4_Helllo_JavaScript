const greetings ='Hello , How are you ?';

function reverseSting(text){
    let reverse ='';
    for(const char of text){
        reverse=char + reverse;
    }
    return reverse;
}

const reverse =reverseSting(greetings);
console.log(reverse);