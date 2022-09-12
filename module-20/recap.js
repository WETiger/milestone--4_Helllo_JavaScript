///variables
var time ='10.23am';
var bookPrice =123;
var isColorWhite = false;

//array /////

var partners =['Arif','jony','rakib','jihad','sajid'];
var elementCount =partners.length;
var jihadIndex = partners.indexOf('jihad');
partners.push('tonny');
partners.pop();
partners.unshift('saidur');
partners.shift('rakib');



////if else if else switch ////

if(bookPrice < 120){
    console.log('i will buy this book');
}else{
    console.log('mama kicu discount den na,apni na mama');
}


/// loop 

var i =0;
while(i <23){
    console.log(i);
    i++;
}

for(var i=3;i<40;i++){
    console.log(i);
}


////function ////

function isMoonUp(time){
    if(time >=19 && time <=5 ){
        return true;
    }
    return false;

}

var moonStartUp = isMoonUp(22);


////variable

///let value of variable could chnge 

let price = 3223;
price = 32;
price=24;
///const value of variable could not chnge 


const myName= "billal hossain";
//  myName = "miraz ahmed";
 console.log(myName);