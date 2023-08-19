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
        name: 'text-color',
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
        name: 'shape-color',
        message: 'What color would you like your shape to be? (Enter color keyword or a hexadecimal number)'
    }
];

