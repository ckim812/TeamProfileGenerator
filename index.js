const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
const fs = require("fs");
const Employee = require("./lib/employee");

inquirer
  .prompt([
    {
      type: "checkbox",
      name: "teamManagerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is the employee ID?",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "What is the email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number?",
    },
  ])
  .then((data) => {
    let htmlContent = generateHTML(data);
    fs.writeFile("index.html", htmlContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });

let isDone = false;
let employees = [];
let employeeType = data;

while (!isDone) {
  // prompt employee: engineer or intern
  inquirer
    .prompt([
      {
        type: "list",
        name: "newEmployee",
        message: "What type of employee?",
        choices: ["enginner", "intern"],
      },
    ])
    .then((data) => {
      employeeType = data;
    });

  // get employee information

  if (employeeType === "engineer") {
    inquirer
      .prompt([
        {
          type: "checkbox",
          name: "name",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "employeeID",
          message: "What is the employee ID?",
        },
        {
          type: "input",
          name: "emailAddress",
          message: "What is the email address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the office number?",
        },
      ])
      .then((data) => {
        let engineer = new Engineer(data.name, data.id);
        employees.push(engineer);
      });
  } else if (employeeType === "intern") {
  } else {
  }

  // save it to an object (by using new ____ employee)
  // append to employees array
  // check to see if you are done

  let shouldContinue = prompt;
  // if done, exit

  if (shouldContinue !== "yes") {
    isDone = true;
  }
}
