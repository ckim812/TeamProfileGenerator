const Employee = require("./employee.js"); 

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }

  getRoleDetailLabel = () => "GitHub:";
  getRoleDetail = () => this.gitHub;
  getRole = () => "Engineer";
}

module.exports = Engineer;