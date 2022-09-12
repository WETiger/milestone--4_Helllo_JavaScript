/* 
    chairWood =3cft/chair
    tableWood =10cft/table
    bedWood =50cft /bed
*/

function woodCalculator(charQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood =50;

    const chairWoodQuantity =perChairWood *charQuantity;
    const tableWoodQuantity =perTableWood *tableQuantity;
    const bedWoodQuantity = perBedWood *bedQuantity;

    const totalWood = chairWoodQuantity + tableWoodQuantity +bedWoodQuantity;

    return totalWood;
}

const char =1; //1,1,1 kore check korbo or indivitual 0 0 0 kore check korbo 
const table =1;
const bed =1;

const tolalWoodCalculator =woodCalculator(char,table,bed);
console.log(tolalWoodCalculator);