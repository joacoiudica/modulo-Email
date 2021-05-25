var {EmailManager} = require('./EmailManager');

async function main(){
    let manager = new EmailManager("joaco.iudica99@gmail.com");

    let details = {
        toEmail: 'joaquin.iudica@gmail.com',
        subject: 'Saludando a joaco',
        body: 'HOLA JOACO COMO ANDAS'
    };

    manager.sendEmail(details).then(r => {
        console.log(r);
    }).catch(res => {
        console.log(res);
    })

    //console.log(response);

}

main();