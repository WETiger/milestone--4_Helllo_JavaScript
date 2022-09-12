/* const numbers=[2,4,53,43,43,55,43,2,3,4,5,5,43,4,3,2,3,4,4];


function removedDuplicateElement(nums){
    const newArr =[];
    for(element of nums){
        if(newArr.indexOf(element)==-1){
            newArr.push(element);
        }
    }
    return newArr;
}

const realNumber =removedDuplicateElement(numbers);
console.log(realNumber); */

const myString = 'Hello World ! ';

function reversedString(text){
    let reverse ='';
    for(const word of text){
        reverse =word +reverse;
    }
    return reverse;
}

const string=reversedString(myString);
console.log(string);