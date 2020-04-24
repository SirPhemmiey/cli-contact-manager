#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfill");
var commander = require("commander");
var chalk = require("chalk");
var actions = require("./logic");
var inquirer = require("inquirer");
var questions_1 = require("./questions");
commander
    .version('1.0.0')
    .description('Simple contact manager');
commander
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(function () {
    console.log(chalk.yellow('****Contact Management System****'));
});
inquirer.prompt(questions_1.questions).then(function (answers) {
    actions.addContact(answers);
});
commander
    .command('getContact')
    .alias('g')
    .description('Get Contact')
    .action(function () {
    console.log(chalk.yellow('=========*** Contact Management System ***=========='));
    inquirer.prompt(questions_1.getIdQuestions).then(function (answers) { actions.getContact(answers.id); });
});
commander
    .command('updateContact')
    .alias('u')
    .description('Update contact')
    .action(function () {
    console.log(chalk.yellow('=========*** Contact Management System ***=========='));
    inquirer.prompt(questions_1.updateContactQuestions).then(function (answers) { return actions.updateContact(answers); });
});
commander
    .command('getContactList')
    .alias('l')
    .description('Get contact list')
    .action(function () {
    console.log(chalk.yellow('=========*** Contact Management System ***=========='));
    actions.getContactList();
});
if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
    commander.outputHelp();
    process.exit();
}
commander.parse(process.argv);
