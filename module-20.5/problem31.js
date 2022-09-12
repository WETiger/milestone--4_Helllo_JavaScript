

function grade(number){
    if(number <0 || number > 100){
        console.log("Your mark is invalid",number);
    }else if(number >= 80){
        console.log("You have got A+ or",num);
    
    }else if(number >= 70){
        console.log("You have got A or",num);
    
    }else if(number >= 60){
        console.log("You have got A- or",num);
    
    }else if(number >= 50){
        console.log("You have got B or",num);
    
    }else if(number >= 40){
        console.log("You have got C or",num);
    
    }else if(number >= 33){
        console.log("You have got D or",num);
    }
    return 0;
}

let num =95;
grade(num);