// //variable

// var crickerName = "Sakib al hasan";
// var ageOfHim =32;

// // array 

// var carName = ['Tesla','BMW','Ferreri','Honda','marcedes','Nissan']
// carName.push('Toyota');
// console.log(carName);
// carName.unshift('Marcedes');
// console.log(carName);
// carName.pop();
// console.log(carName);
// carName.shift();

// console.log(carName);
//condition ////
var num1 = parseFloat(prompt("Enter first number :"));
var num2 = parseFloat(prompt("Enter second number :")) ;
var num3 = parseFloat(prompt("ENter third Number :")) ;

if(num1 > num2 && num1 >num3){
    console.log(num1 + "is the bigest number !");
}else if(num2 > num1 && num2 >num3){
    console.log(num2 + 'is the bigest number !');
}else if( num3 > num1 && num3 >num2){
    console.log(num3 + 'is the bigest number !');
}




// // take input from the user
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// console.log("The largest number is " + largest);