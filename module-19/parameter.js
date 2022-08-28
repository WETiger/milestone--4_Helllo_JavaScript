
function bringSingara(taka){
    console.log("Singara niye asar jonno tk den ",taka);
    console.log('mama amke singara deu');

    var singaraPrice =10;
    var singaraQuantity = taka / singaraPrice ;
    return singaraQuantity;
}
var money = 240 ;
var singara = bringSingara(money);
console.log(singara);