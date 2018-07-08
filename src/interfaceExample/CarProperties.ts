//Simple interface concept
interface CarProperties {
    //declare variable and its type
    color: string;
}

//define the function, pass the interface object
function getColor(carPropObj: CarProperties) {
    console.log(carPropObj.color);
}

//pass the object, and the function will execute only the relevant thing
console.log("Only color property will be called as defined in the getColor contract");
//although there are other properties defined, those will be ignored
let firstCar = {brand : "Proton", model : 2010, color : "silver"};
getColor(firstCar);
