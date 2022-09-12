/* //conversion feetToInch
function feetToInch(feet){
    const inch = 12 * feet;
    return inch;
}

const feetConv =5;
const inchConvert =feetToInch(feetConv);
console.log(inchConvert);

//2 conversion centimeterToMeter

function centimeterToMeter(centimeter){
    const metter = centimeter /100;
    return metter;
}

const centi=200 ;
const ConvertMeter =centimeterToMeter(centi);
console.log(ConvertMeter);


//3//. pageRequirements //book1 has 100pages // book2 has 200pages //book3 has 300pages

function pageRequirements(b1,b2,b3){
    const book1Need =100 *b1;
    const book2Need =200 *b2;
    const book3Need =300 *b3;
    const PageNeeded =book1Need +book2Need +book3Need;
    return PageNeeded;
}

const bookOne =6;
const bookTwo =5;
const bookThree =3;

const totalPageNeeded=pageRequirements(bookOne,bookTwo,bookThree);
console.log(totalPageNeeded);

 */

// const nai ='billal hossain';
// console.log(nai.length);

// array bestFriend


/* 
function bestFriend(names){
    let firstElement =[0];
    for(element of names){
        if(firstElement.length <element.length){
            firstElement =element;
        }
    }
    return firstElement;
}


const friends=['arif jahan','jony','jihad','rakib hasan rifat','abrar','suieb','sakibul islam','md Billal hossain shobuz'];

const lengthBigName=bestFriend(friends);
console.log(lengthBigName);
 */

//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number

// function names onlyPositive 

function onlyPositive(numbers){
    const newArray=[];
    for(element of numbers){
        if(element >=0){
            newArray.push(element);
        }else{
            break;
        }
    }
    return newArray;
}

const remdomNumbers=[12,45,8,6,98,4,9,0,-54,-2];
const positive =onlyPositive(remdomNumbers);
console.log(positive);