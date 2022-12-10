# TeamProfileGenerator

## Description

```
The goal of this project was to create an application that prompts information for a team of employees using Inquirer and Jest in the terminal.
```

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Table of Contents

- [Link to video](#link-to-video)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)

## Link-to-video

[https://app.castify.com/view/d4e760dd-7e19-49c5-8070-fe3600374768](https://app.castify.com/view/d4e760dd-7e19-49c5-8070-fe3600374768)

## Usage

```
Type "npm i" to install Inquirer and Jest
Type "node index.js" when you are in the root directory
Fill in the information required after selecting each prompt
An HTML file will be created in "./dist"
```

## Technologies-Used

```
HTML, JS
```

## Credits

```
Created by Charles Kim.
