//problem 1

console.log('What your work today ?');

var works =['unlock the module at 8pm','practice by watching fatafati vidoes','watch the vidoe and take notes','After completing the module ,practice the whole module by yourself','if you dont understand anything'];

for(var i=0; i <works.length;i++){
    if(works[i]=='if you dont understand anything'){
        console.log(' join support there');
        break;
    }
    console.log(works[i]);
}