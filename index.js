#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Let's Start the Calculations!");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.green `
   _____________________
  |  _________________  |
  | | JO           0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
    console.log(`ℳ𝒶𝒹ℯ 𝒷𝓎 ℳ𝓊𝒽𝒶𝓂𝓂𝒶𝒹 ℛ𝒶𝓂𝓏𝒶𝓃 𝒜𝓀𝓇𝒶𝓂`);
}
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.yellow("Which operation you want to perform?"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: chalk.yellow("Enter number 01"),
        },
        {
            type: "number",
            name: "num2",
            message: chalk.yellow("Enter number 02"),
        },
    ]);
    if (answers.operator === "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator === "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator === "Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator === "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.yellow("Do you want to continue? Press y or n."),
        });
    } while (again.restart === "y" ||
        again.restart === "Y" ||
        again.restart === "YES" ||
        again.restart === "yes");
}
startAgain();
//Steps Involved in this project
//1-Create tsconfig.json file by tsc --init
//2-Make changing in it make target to "ES2020". Module and Module Resolution to "NodeNext".
//3-Create package.json file by npm init -y.
//4-Make changing in it add type= "module".
//5-Add node modules by npm i @types/node -D.
//6-Add inquirer by npm i inquirer
//7-Add chalk and chalk animation by npm i chalk chalk-animation
//8-Add types in devdependies by npm i @types/chalk -D and npm i @types/chalk-animation -D and npm i @types/inquirer -D.
//9-Import all dependies in you main file by import inquirer from inquirer and same for all just change name as per its type.
