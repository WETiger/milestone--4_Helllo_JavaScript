function animalCount(miles){
    const first10AnimalCount =10;
    const second10AnimalCount= 50;
    const restAnimal =100;
    if(miles <=10){
        const count = miles * first10AnimalCount;
        return count;
    }else if(miles <= 20){
        const first10Count = 10 * first10AnimalCount;
        const restMileInto20 =miles - 10;
        const second10Count= restMileInto20 * second10AnimalCount;
        const secondCount = first10Count + second10Count;
        return secondCount;
    }else{
        const first10Count =10*first10AnimalCount;
        const second10Count =10 *second10AnimalCount;
        const restMiles = miles -20;
        const restMilesCount =restMiles *restAnimal;
        const restCount =first10Count + second10Count +restMilesCount;
        return restCount;

    }
}


const animal =35;
const aniCount = animalCount(animal);
console.log(aniCount);