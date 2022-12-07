const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const Employee = require("./lib/employee");

let isDone = true;
let employees = [];
let employeeType = "";

askQ()
// .then((x) => console.log(x));
// console.log('x');
// console.log(x);
// let y = askQ2();
// console.log('y');
// console.log(y);

function askQ() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer Name? ",
      },
    ])
    .then((data) => {
      // console.log(data);
      if (data.name === 'Charles') {
        askQ();
      } else if (data.name === 'Hamburger') {
        askQ2();
      }
      return data;
    });
}

function askQ2() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern Name? ",
      },
    ])
    .then((data) => {
      console.log(data);
      return data;
    });
}

function addMoreEmployees(ans) {
  // console.log(ans);
  // console.log("ans = " + ans);
  if (ans.moreEmployees === "Yes") {
    // console.log("function works for engineer");
    return true;
  } else if (ans.moreEmployees === "No") {
    // console.log("function works for intern");
    return false;
  } else {
    // console.log("none");
  }
}
function addEngineer(ans) {
  // console.log(ans);
  // console.log("ans = " + ans);
  if (ans.newEmployee === "engineer") {
    // console.log("adding engineer");
    return true;
  } else {
    // console.log("no engineer");
    return false;
  }
}
function addIntern(ans) {
  // console.log(ans);
  // console.log("ans = " + ans);
  if (ans.newEmployee === "intern") {
    // console.log("adding intern");
    return true;
  } else {
    // console.log("no intern");
    return false;
  }
}
