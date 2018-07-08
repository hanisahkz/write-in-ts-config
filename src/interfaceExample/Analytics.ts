//exploring i) read only mode, ii) optional variable
//explore: concept of module
export interface Analytics {
    //i. mandatory properties
    event : string;
    //ii. optional properties
    macroParams? : any;
    //iii. immutable properties
    readonly platform : string;
}

//typically, you don't have to do all the steps down here. But, this is for the sake of demo


// let analy1 = {username : "Jane Doe", platform : "confluence cloud"};
// interface will enforce the contract whereby only pre-defined properties are allowed
// Example below will give error as "username" is not part of the pre-defined attribute
// let analy1 : Analytics = {username : "Jane Doe", platform : "confluence cloud"};

// let analy2 : Analytics = {event : "Macro created", platform : "confluence cloud"};
// // analy2.platform = "jira"; // this won't be allowed
// console.log(analy2);
// analy2.event = "Macro updated"; //but this will be OK because it's not read only
//
// analy2.macroParams = {title : "Item 1", style: "padding:16px;border:solid 1px grey;"};
// //interface ensures that the Object creation is predictable as predefined in the interface
// //below will give throw error
// // analy2.username = "John Doe";
//
// console.log(analy2);