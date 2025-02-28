const readLine = require("readline-sync");

let user_input = readLine.question("Enter a string :\n");

console.log("You entered- "+user_input);

let char_index = readLine.questionInt("Enter an index number to find the character at that index: ");

console.log("The character at index "+char_index+" is - "+user_input[char_index] );