import axios from 'axios';
import * as chalk from 'chalk';
import * as ora from 'ora';

const url: string = "https://us-central1-contactmanager-cli.cloudfunctions.net";

export const addContact = async(answers: any) => {
    const spinner = ora('Adding Contact').start();
   try {
    let response = await axios.post(`${url}/addContact`, answers);
    spinner.stop();
    console.log(chalk.magentaBright('New Contact added'));
   }
   catch(err) {
       console.log({err});
   }
}
