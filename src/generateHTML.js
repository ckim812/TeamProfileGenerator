const Manager = require("../lib/teamManager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

function createEmployeeDivs(employees) {}

function generateHTML(employees) {
  //insert cards per employee
  //print out an array of strings in HTML from

  // let employeeDivs = createEmployeeDivs(employees);

  let employeeDivs = [
    "<li>liONE</li>",
    "<li>liTWO</li>",
    "<li>liTHREE</li>",
  ];

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
        <title>Document</title>
      </head>
      <body>
        <h1>Hello ${employeeDivs}!!!</h1>
        <h2>ID: ${employeeDivs[0]}</h2>
        <h2>Email: ${employeeDivs[1]}</h2>
        <h2>Office #: ${employeeDivs[2]}</h2>
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