var skyColor = 'white';

var phones =['realme','xoami','samsung','nokia','htc'];

phones[2]='walton';
console.log(phones);
//check opppo exist in an array 
if(phones.indexOf('oppo')== -1){
    console.log('opps! amir khan r oppo pailam na');
}
/// check htc is available in an array 
if(phones.indexOf("htc") != -1){
    console.log('yeah i got my phone here');
}


//// loop 

var i = 0 ;
while(i <phones.length){
    console.log(phones[i]);
    i++;
}

for(var i = 0; i <=49 ;i++){
    console.log(i);
}

function addThreeNumbers(num1,num2,num3){
    var sum =num1+num2+num3 ;
    return sum;
}
var a =3;
var b =5;
var c =6;

var result =addThreeNumbers(a,b,c);

console.log('Total number of three :',result);