import axios from 'axios';
import * as chalk from 'chalk';
import * as ora from 'ora';
import {UpdateContactForm, ContactForm} from './firefunctions/functions/src/interfaces';

const url: string = "https://us-central1-contactmanager-cli.cloudfunctions.net";

export const addContact = async(answers: ContactForm) => {
   try {
    const spinner = ora('Adding Contact').start();
    await axios.post(`${url}/addContact`, answers);
    spinner.stop();
    console.log(chalk.magentaBright('New Contact added'));
   }
   catch(err) {
       console.log({err});
   }
}

export const getContact = async (id: number) => {
    try {
        const spinner = ora('Fetching Contact').start();
        const response = await axios.get(`${url}/getContact/${id}`);
        spinner.clear();
        spinner.stop();
        const obj = response.data;
        for (const key in obj) {
            console.log(chalk.blue('________________'));
            console.log(chalk.greenBright(`email: ${obj[key].email}`))
        }
    }
    catch(err) {
        console.log({err});
    }
};

export const updateContact = async (contact: UpdateContactForm) => {
    try {
        const spinner = ora('Updating Contact').start();
        await axios.put(`${url}/updateContact/${contact.id}` , contact);
        spinner.stop()
        console.log(chalk.cyanBright('Contact updated'))
    }
    catch (error) {
        console.log(error)
    }
};

export const deleteContact = async (id: number) => {
    try {
        const spinner = ora('Deleting Contact').start();
        await axios.delete(`${url}/deleteContact/${id}`);
        spinner.stop();
        console.log(chalk.bgMagentaBright('Contact deleted'));
    }
    catch (error) {
        console.log(error)
    }
};

export const getContactList = async() => {
    try {
    const spinner = ora('Fetching All Contacts ...').start();
    const response = await axios.get(`${url}/getContactList`);
    spinner.stop()
    const obj = response.data.res;
    console.log(chalk.green('**********=== Contacts List===**********'));
    for (var key in obj) {
        console.log(chalk.blue('==============='))
        console.log(chalk.greenBright(`id: ${key} \nFirstname: ${obj[key].firstname} \nLastname: ${obj[key].lastname} \nPhone Number: ${obj[key].phone} \nEmail: ${obj[key].email}`))
    }
    }
    catch (error) {
        console.log(error)
    }
};