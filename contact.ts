import './polyfill';
import * as commander from 'commander';
import * as chalk from 'chalk';
import * as inquirer from 'inquirer';

commander
    .version('1.0.0')
    .description('Simple contact manager')


commander
    .command('Add contact')
    .alias('a')
    .description('Add a contact')
    .action(() => {
        console.log(chalk.yellow('****Contact Management System****'))
    });
    // inquirer.prompt(question).then((answers) => {

    // });