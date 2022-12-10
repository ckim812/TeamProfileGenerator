const Employee = require("./employee.js"); 

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRoleDetailLabel = () => "School:";
  getRoleDetail = () => this.school;
  getRole = () => "Intern";
}

module.exports = Intern;