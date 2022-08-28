var computer={
    name :'lenovo',
    price :45000,
    storage : '1TB',
    internalMamory :"8gb",
    ssd : 256 
}
var computerStorage = computer.storage;
console.log(computer.internalMamory);
console.log(computer['ssd']);
console.log(computerStorage);

///diffrenct type of set a value
var computerPropartyPrice = 'price'
computer.price =30000 ;
computer['price']=20000;
computer[computerPropartyPrice] =19000;
console.log(computer);

computer.ssd = 512;
computer['storage'] ='3TB';
console.log(computer);

var nameleptop ='name';
computer[nameleptop]='Hp';
console.log(computer);