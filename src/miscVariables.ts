//shorthand variable declaration
let someName: string, someAge: number, someStatus: boolean;
someName = "Joe";
someAge = 123;
someStatus = true;

console.log(someName + someAge + someStatus);

//enum available only in Typescript
enum GroupType {
    STUDENT = "student",
    PROFESSIONALS = "professionals",
    FULLY_RETIRED = "retired"
}

//type declaration for function is on the flip side
//S1. with curly braces
function checkGroup(groupType: string) {
    switch (groupType) {
        case GroupType.STUDENT : {
            console.log("I'm a student");
            break;
        }
        case GroupType.PROFESSIONALS : {
            console.log("I'm a professional");
            break;
        }
        case GroupType.FULLY_RETIRED : {
            console.log("I'm now full retired");
            break;
        }
        default : {
            console.log("I'm a respected jobless human being adding to the unemployment statistics");
        }
    }
}

//S2. without curly braces
// function checkGroup(groupType: string) {
//     switch (groupType) {
//         case GroupType.STUDENT : console.log("I'm a student");
//             break;
//         case GroupType.PROFESSIONALS : console.log("I'm a professional");
//             break;
//         case GroupType.FULLY_RETIRED : console.log("I'm now full retired");
//             break;
//         default :  console.log("I'm a respected jobless human being adding to the unemployment statistics");
//     }
// }

checkGroup("student");
checkGroup("astronaut");
