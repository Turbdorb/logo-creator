const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like your logo to have? (Enter 3 characters only)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What would you like the color of your text to be? (Enter color keyword or a hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo!',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? (Enter color keyword or a hexadecimal number)'
    }
];

function createLogo(answers) {
    if (answers.shape === 'Triangle') {
        var userShape = new Triangle(answers.shapeColor).render();
    } else if (answers.shape === 'Circle') {
        var userShape = new Circle(answers.shapeColor).render();
    } else {
        var userShape = new Square(answers.shapeColor).render();
    }
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${userShape} <text x="150" y="115" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text> </svg>`
};

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        if(answers.text.length > 3) {
            console.log('Value must be 3 characters. No more no less.');
            init();
        } else {
            fs.writeFile(`./examples/${answers.text}.svg`, createLogo(answers), (err) => err ? console.log(err) : console.log('Logo created!'));
        }
    });
};

init();