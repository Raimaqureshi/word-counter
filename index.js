#! /usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// declare a constant 'answer' and assign it to the result of inquier.prompt funciton
const answers = await inquirer.prompt([
    {
        name: "sentence",
        Type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// Print the word of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
