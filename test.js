const inquirer = require("inquirer");
const Rx = require("Rx");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const Employee = require("./lib/employee");

let prompts = new Rx.Subject();
inquirer.prompt(prompts);

// At some point in the future, push new questions
prompts.next({
  type: "input",
  name: "teamManagerName",
  message: "What is the team manager's name?",
});

prompts.next({
  type: "input",
  name: "employeeID",
  message: "What is the employee ID?",
});

// When you're done
prompts.complete();
