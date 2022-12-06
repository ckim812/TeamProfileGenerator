const Employee = require("./employee.js"); 

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email, 'engineer');
    this.gitHub = gitHub;
  }
}

module.exports = Engineer;