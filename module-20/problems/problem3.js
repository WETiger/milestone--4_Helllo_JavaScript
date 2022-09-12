function ConvertHourIntoMinutes(hour){
    const minutes = hour *60 ;
    return minutes;
}

const isHour =5;
const isMinutes =ConvertHourIntoMinutes(isHour);
console.log(isHour,'hours convert into ',isMinutes,"minutes");