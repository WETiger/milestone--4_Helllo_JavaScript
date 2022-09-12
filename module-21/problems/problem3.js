function argArray(numbers){
    let arg = 0;
    for( let i =0;i <numbers.length ; i++){
        arg = arg + numbers[i];
    }

    return arg/numbers.length;
}

const arg =[15,60,5,10,10];
const arvages =argArray(arg);
console.log('The avarage is',arvages);

