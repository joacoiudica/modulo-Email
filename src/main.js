var EmailManager = require('./EmailManager');

async function main(){
    let manager = new EmailManager("joaco.iudica99@gmail.com", "4P'M6w@,");

    let response = await manager.sendEmail('joaquin.iudica@gmail.com', 'Saludando a joaco', 'HOLA JOACO COMO ANDAS');

    console.log(response);

}

main();