const inquirer = require("inquirer");
const fs = require("fs");
// Importing shape classes from shap
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function to write SVG file using user input
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;

    // Function for shape properties based on users input
    let shapeChoice;
    // Triangle color and shap for SVG
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
        // Square color and shape for SVG
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
        // Circle color and shape for SVG
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }
    // Close group tag
    svgString += "</g>";
    // CloseSVG tag
    svgString += "</svg>";

    // Error function for SVG file 
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

// Function prompting user input using Inquirer
function promptUser() {
    inquirer
        .prompt([
            // Prompt for text input for logo
            {
                type: "input",
                message:
                    "What text would you like you logo to display? (Enter up to three characters)",
                name: "text",
            },
            // Prompt for text color
            {
                type: "input",
                message:
                    "Choose text color (Enter color keyword OR a hexadecimal number)",
                name: "textColor",
            },
            // Prompt for selecting logo shape 
            {
                type: "list",
                message: "What shape would you like the logo to render?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            // Prompt for background color of the shape
            {
                type: "input",
                message:
                    "Choose shapes color (Enter color keyword OR a hexadecimal number)",
                name: "shapeBackgroundColor",
            },
        ])
        .then((answers) => {
            // Function for text length error
            if (answers.text.length > 3) {
                console.log("Must enter a value of no more than 3 characters");
                promptUser();
            } else {
                // Generate SVG file with user input
                writeToFile("logo.svg", answers);
            }
        });
}
// Call function
promptUser();