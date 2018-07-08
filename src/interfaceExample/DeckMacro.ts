import {Analytics} from "./Analytics";
//
let deckMacro1: Analytics = {event : "Deck Macro created", platform : "jira"};
console.log(deckMacro1);

deckMacro1.event = "Deck Macro updated";
deckMacro1.macroParams = {title : "On a one fine day", url : "www.google.com"};
console.log(deckMacro1);
