const { Employee, Manager, Intern, Engineer } = require("../lib");

function generateHTML(employees) {
  // // employees = JSON.parse(employees);
  // console.log("employees="+employees[0].name);
  // console.log("employees="+employees[0].id);
  // console.log("employees="+employees[0].email);
  // console.log("employees="+employees[0].officeNumber);

  //add top portion of HTML to output
  let output = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <title>My Team</title>
    </head>
    <body>
      <div class="d-flex justify-content-center bg-primary">
        <h1 class="d-inline-flex m-2 p-2 text-white">Here are my employees:</h1>
      </div>
      `;

  //insert cards per employee
  let createEmployeeDivs = () => {
    console.log("#ofemployees=" + employees.length);
    for (let i = 0; i < employees.length; i++) {
      let roleDetailDiv = ``;
      switch (employees[i].getRole()) {
        case "Engineer":
          roleDetailDiv = `<li>${employees[i].getRoleDetailLabel()} <a href = "https://github.com/${employees[i].gitHub}" target="_blank">${employees[i].gitHub}</a></li>`;
          break;
        default:
          roleDetailDiv = `<li>${employees[i].getRoleDetailLabel()} ${employees[i].getRoleDetail()}</li>`;
      }

      let employeeCard = [
        `
    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">${employees[i].getRole()}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${employees[i].name}</h5>
        <p class="card-text">
          <ul>
            <li>ID: ${employees[i].id}</li>
            <li>Email: <a href = "mailto: ${employees[i].email}">${employees[i].email}</a></li>
            ${roleDetailDiv}
          </ul>
        </p>
      </div>
    </div>
      `,
      ];
      output += employeeCard;
    }
  };

  createEmployeeDivs();

  //add bottom portion of HTML to output
  output += `
      <!-- JavaScript Bundle with Popper -->
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
  return output;
}

module.exports = generateHTML;
