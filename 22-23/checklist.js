//comment
/* 
    recheck basic javaScript
*/
//1 write 3 variables (string,integer,booleen)

// var name ="Billal Hossain";
// let age =23;
// const a = flase;

///2 . write 2 veriables and using
/* let named ='Billal hossain';
const age = 25;
named ="Shanto ";
 /* age = 32; */
//  console.log(named,age); */

 //3 .simple math operations
 let x =5;
 let y=10;
/* let z =x+y;
console.log(z);
z =x-y;
console.log(z);
z=x*y;
console.log(z);
z=x/y;
console.log(z);
z =x%y;
console.log(z); */

// 4. varible equal not equal small bigest 

/* console.log(x==y);
console.log(x!=y);
console.log(x>y);
console.log(x>=y);
console.log(x<y);
console.log(x<=y); */

//5 .fulfil both condition and two condition case:1 and case fulfil at least one condition
/* 
switch(true){
    case x!=y && x==y:
        console.log("true both");
        break;
    case x>y || x<y:
        console.log("true one");
        break;
    default:
        console.log(false);
} */

//if else 
/* 
if(x!=y){
    console.log("not equal number");
}else{
    console.log('equal');
} */

// 7. while loop 7 to 19 all numbers display and odd number display 7-19
let i =7;
// while(i<=19){
//     console.log(i);
//     i++;
// }
/* while(i<=19){
    console.log(i);
    i +=2;
} */

//8. declear any type of array 

// let checkArray =['billal','arif','jihad',4,3,45,5,8];
// const element =checkArray.length;
// console.log(element);
// checkArray[3]='limi';
// checkArray.push('nil');
// checkArray.pop();
// console.log(checkArray);
// const specificElement=checkArray.indexOf('ondhokar');
// console.log(specificElement);

//9 .use any for loop to display every elements of an arrray
// for(check of checkArray){
//     console.log(check);
// }

// 10. you have an array of numbers .display only the numbers bigger than 80
/* 
const numbers=[45,22,100,84,54,95,35,96,25,88,57,93];
for(number of numbers){
    if(number > 80){
        console.log(number);
    }
} */

//11. write a function that takes three numbers and return the multiplication of the three numbers

function multiplication(num1,num2,num3){
    const multi =num1*num2*num3;
    return multi;
}
const a=2; 
const b=3;
const c=4;
const result =multiplication(a,b,c);
console.log('multiplication is ',result);


//12. declear an object and change any property .

const info ={
    name:'billal hossain',
    age:23,
    id:2323,
    country:'bangladesh'
}
console.log(info)
info.country='alo';
console.log(info);