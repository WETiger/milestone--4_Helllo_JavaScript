const chepeastPhone=[
    {name:'walton 32', price:15000, display:5, camera:8, storage:16},
    {name:'Iphone 14' , price:121500, display:6, camera:128,storage:128},
    {name:'Samsung m21', price:31500, display:5.5, camera:48,storage:32},
    {name:'Realme 8', price:20500, display:5.6, camera:64, storage:128},
    {name:'shaomi note 11', price:35500, display:6, camera:32 ,storage:64},
    {name:'redme a2', price:11500, display:5, camera:20, storage:32},
    {name:'huawei 15', price:25000, display:5, camera:16, storage:48}
];

function findChepeastPhone(phone){
    let chepeast =chepeastPhone[0];
    for (const mobile of chepeastPhone){
        if(mobile.price <chepeast.price){
            chepeast = mobile;
        }
    }
    return chepeast;
}

const chep =findChepeastPhone(chepeastPhone);
console.log(chep);