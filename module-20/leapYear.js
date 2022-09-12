// function leapYear(year){
//     if(year%4 == 0){
//         return true;
//     }
//     return false;
// }

// const years =2020;
// const isLeapYear =leapYear(years);
// console.log('Is my year leap year' ,isLeapYear);

// const yourYear =2224 ;
// const isYourYearLeapYear =leapYear(yourYear);
// console.log('Is your year leap year ',isYourYearLeapYear);

function isLeapYear(year){
    if((year %4 ==0 && year%100 !=0)|| year%400 ==0){
        return true;
    }
    return false;
}

const myYear =2100 ;
const isMyYearLeapYear =isLeapYear(myYear);
console.log('Is my year leap year :',isMyYearLeapYear);
