//Tuple is similar to array except that it can accept multiple object types
let lhHumanAttributes: [string, number, boolean, any];
lhHumanAttributes = ["james", 45, false, "blue"];

console.log(
    "I am " + lhHumanAttributes[0] + ", aged " + lhHumanAttributes[1] + " years old. " +
    "The sky is " + lhHumanAttributes[2] + " " + lhHumanAttributes[3]
);

//the 1st tuple example will throw error because the mapped object type doesnt match
//however, it only cares up to what's defined. After the defined type ends, it just doesn't care about the type
// let shHumanAttributes: [string, number, boolean, any] = [32", "sarah", false, "red", 1, 2, 3, "blah"];

//this example would still transpile successfully to js, but tsc will complain about unmacthing length & type error
// let shHumanAttributes: [string, number, boolean, any] = ["sarah", 32, false, "red", 1, 2, 3, "blah"];
// console.log("this is the last corresponding variable: " + shHumanAttributes[3]);
// console.log("after the last one, it doesnt matter: " + shHumanAttributes[4]);
// console.log(shHumanAttributes[5]);
// console.log(shHumanAttributes[6]);
// console.log(shHumanAttributes[7]);

// shHumanAttributes.push("jamie");
// console.log("tuple is not immutable: " + shHumanAttributes);

//array variable - declare using Type[]
// let shArrayName: string[] = [123, "name"]; //this will be invalid
let shArrayName: string[] = ["apple", "banana"];
let shArrayNumber: number[] = [23, 45 - 10];
let shArrayBool: boolean[] = [false, true];
let shArrayAny: any[] = ["some string", 45, false]; //similar to tuple

// console.log(shArrayName);
// console.log(shArrayNumber);
// console.log(shArrayBool);
// console.log(shArrayAny);

//array variable - declare using Array<Type>
//single Type
let shArrayStrDiamond: Array<string> = ["purple", "black"];
let shArrayNumDiamond: Array<number> = [10, 11];
let shArrayAnyDiamond: Array<any> = ["brown", 123];

// console.log(shArrayStrDiamond);
// console.log(shArrayNumDiamond);
// console.log(shArrayAnyDiamond);

//multiple Type
//this should throw error
// let shArrayMixDiamond: Array<number | boolean> = [true, 100, "some string"];
//this should work and the order doesn't matter. For Tuple, the order of object type will matter
let shArrayMixDiamond: Array<number | boolean> = [true, 100];
console.log("Came from mixed diamond :" + shArrayMixDiamond);

//1. const cannot be reassigned. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
const fixedNum: Array<number> = [10, 20, 40];
//this operations are OK
fixedNum.push(1000);
fixedNum.pop();
console.log(fixedNum);
//but this is NOT OK as it involves reassigning
// fixedNum = [90, 11];

const abc = "123";
// abc = "something else";

//2. const can be made to be immutable using Object.freeze(<target variable>)
const fixedBool: Array<boolean> = [true, false, true];
Object.freeze(fixedBool);
console.log("Values become immutable: " + fixedBool);

//3. try...catch ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
try {
    fixedBool.pop();
} catch (e){
    console.error("Attempted operation on immutable variable will throw the following: " + e);
}