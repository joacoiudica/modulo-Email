var {EmailManager} = require('./EmailManager');

async function main(){
    let credentials = {
        user: 'xxx',
        pass: 'xxx'
    };

    let manager = new EmailManager(credentials);

    let mailDetails = {
        toEmail: 'joaquin.iudica@gmail.com',
        subject: 'Saludando a joaco',
        body: 'HOLA JOACO COMO ANDAS'
    };

    manager.sendEmail(mailDetails).then(r => {
        console.log(r);
    }).catch(error => {
        console.log(error.message);
    })

    //console.log(response);

}

main();