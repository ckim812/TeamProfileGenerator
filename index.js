const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const { Employee, Manager, Intern, Engineer } = require("./lib");

let employees = [];
askManagerQ();

function askManagerQ() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
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
      employees.push(
        new Manager(
          data.name,
          data.employeeID,
          data.emailAddress,
          data.officeNumber
        )
      );
      // console.log(employees);
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
      // console.log(employees);
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
      // console.log(employees);
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
        choices: [
          // 'test',
          // "manager",
          "Engineer",
          "Intern",
          "I'm done building my team!",
        ],
      },
    ])
    .then((data) => {
      // if (data.newEmployee === "test") {
      //   employees.push(
      //     new Manager(
      //       'charlesMANG',
      //       1234566,
      //       'ckim8123@gmail.com',
      //       1234567489
      //     )
      //   );employees.push(
      //     new Engineer(
      //       'charlesENGIN',
      //       1234566,
      //       'c432543254325@gmail.com',
      //       'ckim812'
      //     )
      //   );employees.push(
      //     new Intern(
      //       'charlesINTER',
      //       1234566,
      //       'VBFESRGBRDEASHFDASG@gmail.com',
      //       'Yale'
      //     )
      //   );
      //   let htmlContent = generateHTML(employees);
      //   fs.writeFile("./dist/index.html", htmlContent, (err) =>
      //     err
      //       ? console.log(err)
      //       : console.log("Successfully created index.html!")
      //   );
      //   return;
      // } else if (data.newEmployee === "manager") {
      //   askManagerQ();
      // } else 
      if (data.newEmployee === "Engineer") {
        askEngineerQ();
      } else if (data.newEmployee === "Intern") {
        askInternQ();
      } else {
        let htmlContent = generateHTML(employees);
        fs.writeFile("./dist/index.html", htmlContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
        return;
      }
    });
}
