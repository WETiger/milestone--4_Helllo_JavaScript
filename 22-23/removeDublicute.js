const names =['abul','kabul','sabul','jabul','ebul','kibul','kabul','abul','kabul','sabul','jabul','sabul','ebul','kibul','abul','kabul','sabul'];

function removeDuplicate(group){
    const unique =[];
    for (const element of group){
        // console.log(element);

        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}


const freshList =removeDuplicate(names);
console.log(freshList);