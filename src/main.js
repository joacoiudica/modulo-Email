var {EmailManager} = require('./EmailManager');
var credentials = require('../cred/credentials.json');

const cred = {
    user: credentials.user,
    pass: credentials.pass
}

async function main(){

    const manager = new EmailManager(cred);

    const mail1 = {
        toEmail: 'joaquin.iudica@gmail.com',
        subject: 'Saludando a joaco',
        body: 'HOLA JOACO COMO ANDAS'
    };

    manager.sendEmail(mail1).then(r => {
        console.log(r);
    }).catch(error => {
        console.log(error.message);
    });

    const mail2 = {
        toEmail: 'joaquin.iudica@gmail.com',
        subject: 'Hola joaco',
        body: 'Te adjunto aca el archivo'
    } 

    const att = [
        {
            filename: 'prueba.txt',
            content: 'hola joaco',
            contentType: 'text/plain'
        }
    ]

    manager.sendEmailWithAttachment(mail2, att).then(r => {
        console.log(r);
    }).catch(error => {
        console.log(error.message);
    });

}

main();