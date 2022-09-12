function factFor(num){
    let fact =1;
    for(let i=num; i>=1;i--){
        fact = fact *i;
    }
    return fact;
}

const myNum = 7;
const myFact =factFor(myNum);
console.log("My factorial number",myNum,':',myFact);