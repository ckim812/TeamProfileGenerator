class Employee {
  constructor(name, id, email, type) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

module.exports = Employee;
