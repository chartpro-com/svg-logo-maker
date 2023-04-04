


const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shape');


inquirer.prompt([
    {
        type: 'input',
        name: 'characters',
        message: 'Enter up to 3 letters or characters that the logo will contain',
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color you would like your characters to be.',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for you logo.',
        choices: ['circle', 'square', 'triangle',]
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color you would like your shape to be.',
    },
])

.then((data) => {
    const {characters, textColor, shape, shapeColor} = data;
    var svgInstance;
    switch (shape){
        case "circle":
            svgInstance = new Circle(shapeColor, textColor, characters);
            break;
        case "square":
            svgInstance = new Square(shapeColor, textColor, characters);
            break;
        case "triangle":
            svgInstance = new Triangle(shapeColor, textColor, characters);   
    }
    

    fs.writeFileSync('./examples/logo.svg', svgInstance.render());
    });

    