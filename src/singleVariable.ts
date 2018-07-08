//long hand single variable
let lhString: string;
let lhNumber: number;
let lhAny: any;
let lhBoolean: boolean;

// lhString = 123; //this will throw type error
lhString = "executed from long hand";
lhNumber = 12*4;
lhAny = false;
lhBoolean = true;

console.log(lhString);
console.log(lhNumber);
console.log(lhAny);
console.log(lhBoolean);

//short hand single variable
let shString: string = "executed from short hand";
let shNumber: number = 100 + 100;
let shAny: any = "i can be any object type";
let shBoolean: boolean = true;

console.log(shString);
console.log(shNumber);
console.log(shAny);
console.log(shBoolean);