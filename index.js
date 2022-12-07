const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/teamManager");
const Intern = require("./lib/intern");

let employees = [];

askManagerQ();

function askManagerQ() {
  inquirer
    .prompt([
      {
        type: "input",
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
      employees.unshift(
        new Manager(
          data.teamManagerName,
          data.employeeID,
          data.emailAddress,
          data.officeNumber
        )
      );
      console.log(employees);
      addMoreEmployees();
    });
}
function askEngineerQ() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer Name? ",
      },
      {
        type: "input",
        name: "employeeID",
        message: "Employee ID? ",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Email? ",
      },
      {
        type: "input",
        name: "gitHub",
        message: "GitHub Username? ",
      },
    ])
    .then((data) => {
      const newEngineer = new Engineer(
        data.name,
        data.employeeID,
        data.emailAddress,
        data.gitHub
      );
      employees.push(newEngineer);
      console.log(employees);
      addMoreEmployees();
    });
}
function askInternQ() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern Name? ",
      },
      {
        type: "input",
        name: "employeeID",
        message: "Employee ID? ",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Email? ",
      },
      {
        type: "input",
        name: "school",
        message: "School Name? ",
      },
    ])
    .then((data) => {
      const newIntern = new Intern(
        data.name,
        data.employeeID,
        data.emailAddress,
        data.school
      );
      employees.push(newIntern);
      console.log(employees);
      addMoreEmployees();
    });
}
function addMoreEmployees() {
  inquirer
    .prompt([
      {
        loop: true,
        type: "list",
        name: "newEmployee",
        message: "What type of employee?",
        choices: ["engineer", "intern", "finish building my team"],
      },
    ])
    .then((data) => {
      // console.log(data);
      if (data.newEmployee === "engineer") {
        askEngineerQ();
      } else if (data.newEmployee === "intern") {
        askInternQ();
      } else {
        let htmlContent = generateHTML(employees);
        fs.writeFile("index.html", htmlContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
        return;
      }
    });
}
