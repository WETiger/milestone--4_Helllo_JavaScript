const phones =[
    {name:' samsung m21', price: 45000, camara: 64, storage: 64},
    {name:'Iphone 13',price:120000,camara:72,storage:256},
    {name:'Nokia 2700',price:15000,camara:12,storage:86},
    {name:'Realme 8',price:27000,camara:48,storage:128},
    {name:'shaomi note 9',price:55000,camara:64,storage:32},
    {name:'Htc h43',price:11000,camara:16,storage:16},
];

let chepast = phones[0];
for (const phone of phones){
    if(phone.price < chepast.price )
    chepast = phone;
}
console.log(chepast);