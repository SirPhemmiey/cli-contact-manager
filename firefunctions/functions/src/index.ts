import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import { ContactForm } from './interfaces';
import * as express from 'express';

// // https://firebase.google.com/docs/functions/typescript

admin.initializeApp(functions.config().firebase);
const app: express.Application = express();
app.use(cors({origin: true}));

const contactRef: admin.database.Reference = admin.database().ref('/contacts');

exports.addContact = functions.https.onRequest((request, response) => {
    const form = request.body as ContactForm;
    cors()(request, response, () => {
        contactRef.push(form);
    });
    response.send({msg: 'Done', 'data': {
        form
    }})
});

exports.getContactList = functions.https.onRequest((request, response) => {
    return contactRef.once('value', (data) => {
        response.send({
            res: data.val()
        });
    });
});


app.put("/:id", async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const form = request.body as ContactForm;
    await admin.database().ref('/contacts/'+request.params.id).update(form);
    response.send({
        msg: "Successfully updated"
    });
    next();
});

app.delete('/:id', async(request: express.Request, response: express.Response, next: express.NextFunction) => {
    await admin.database().ref('/contacts/'+ request.params.id).remove();
    response.send({
        msg: 'Successfully deleted',
    });
    next();
});

app.get('/:id', async(request: express.Request, response: express.Response, next: express.NextFunction) => {
    await admin.database().ref('/contacts'+request.params.id).once('value', (data) => {
        const sn = data.val();
        response.send({
            msg: sn
        });
        next();
    }, (err) => response.send({err}));
});

exports.getContact = functions.https.onRequest((request: express.Request, response: express.Response) => {
    return app(request, response);
});

exports.updateContact = functions.https.onRequest((request: express.Request, response: express.Response) => {
    return app(request, response);
});

exports.deleteContact = functions.https.onRequest((request, response) => {
    return app(request, response);
});
