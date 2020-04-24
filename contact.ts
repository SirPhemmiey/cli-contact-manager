#!/usr/bin/env node

import './polyfill';
import * as commander from 'commander';
import * as chalk from 'chalk';
import * as actions from './logic';
import * as inquirer from 'inquirer';
import {questions, getIdQuestions, updateContactQuestions} from './questions';

commander
    .version('1.0.0')
    .description('Simple contact manager')


commander
    .command('addContact')
    .alias('a')
    .description('Add a contact')
    .action(() => {
        console.log(chalk.yellow('****Contact Management System****'))
    });
    inquirer.prompt(questions).then((answers: any) => {
        actions.addContact(answers);
    });


commander
    .command('getContact')
    .alias('g')
    .description('Get Contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='));
        inquirer.prompt(getIdQuestions).then((answers: any) => { actions.getContact(answers.id)});
    });


commander
    .command('updateContact')
    .alias('u')
    .description('Update contact')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        inquirer.prompt(updateContactQuestions).then((answers: any) => actions.updateContact(answers))
    });


commander
    .command('getContactList')
    .alias('l')
    .description('Get contact list')
    .action(() => {
        console.log(chalk.yellow('=========*** Contact Management System ***=========='))
        actions.getContactList();
    });

if(!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv)