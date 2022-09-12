/* for(let i=1; i<=50; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log('fooBar');
    }else if(i%3 == 0){
        console.log('foo');
    }else if(i%5 ==0){
        console.log('bar');
    
    }else{
        console.log(i);
    }
    
} */

function foobarFuntion(number){
    for(let i=1; i<=number; i++){
        switch(true){
            case (i%3==0 && i%5==0) :
                console.log('FooBar');
                break;
            case (i%3==0 ):
                console.log('foo');
                break;
            case (i%5==0) :
                console.log('bar') ;
                break;
            default:
                console.log(i);
        }
    }
}

const num =100;
const output =foobarFuntion(num);