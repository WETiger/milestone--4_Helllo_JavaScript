var money =305 ;
function bringPotato(taka){
    console.log('bro give me number of potato ',taka);
    console.log('mama give me those potato');
    var potatoPrice =15 ;
    var potatoQuantity = taka /potatoPrice ;

    return potatoQuantity;
}

var obtain = bringPotato(money);
console.log(obtain);