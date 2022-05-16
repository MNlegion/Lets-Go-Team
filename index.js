// Requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./src/htmlDisplay");
const validator = require("email-validator");

// Set up Async functions
// const writeFileAsync = util.promisify(fs.writeFile);
// const appendFileAsync = util.promisify(fs.appendFile);

// team array and string for html and css
let teamArray = [];
let teamString = ``;

// need main function for main call below to run application and generate html


// Inquirer prompts for user command line input
async function prompt() {
    let responseDone = "";

    do {
        try {
            console.log("---------------------------------------------");
            let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the employee's name?: ",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "Enter the employee's ID: ",
                    validate: function validateName(name){
                        return name !== '';
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter the employee's email address: ",
                    // Validate email with email-validator
                    validate: function validateEmail(name){
                        return validator.validate(name);
                    }
                },
                {
                    type: "list",
                    name: "role",
                    message: "What what is the employee's role:",
                    choices: [
                         "Engineer",
                         "Intern",
                         "Manager"
                    ]
                }
            ]);

            let response2 = ""

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's github username?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                    // Add to team Array
                    const engineer = new Engineer(response.name, response.id, response.email, response2.x);
                    teamArray.push(engineer);

               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What school is the employee attending?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                    // Add to team Array
                    const intern = new Intern(response.name, response.id, response.email, response2.x);
                    teamArray.push(intern);

               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "x",
                         message: "What is the employee's office number?:",
                         validate: function validateName(name){
                            return name !== '';
                        },
                    }, ]);

                    // Add to team Array
                    const manager = new Manager(response.name, response.id, response.email, response2.x);
                    teamArray.push(manager);
               }

        } catch (err) {
            return console.log(err);
        }

          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to continue?: ",
               choices: [
                    "Yes",
                    "No"
               ]
            },]);

     } while (responseDone.finish === "Yes");
}

// Run Application
main();