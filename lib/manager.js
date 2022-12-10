const Employee = require("./employee.js"); 

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  };

  getRoleDetailLabel = () => "Office Number:";
  getRoleDetail = () => this.officeNumber;
  getRole = () => 'Manager';
};

module.exports = Manager;
