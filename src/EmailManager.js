var nodemailer = require('nodemailer');
var credentials = require('../mailcred/credentials.json'); //uso un archivo json para guardar credenciales

class EmailManager {
    constructor(fromEmail){
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: credentials.user,
                pass: credentials.pass
            }
        })
        this.email = fromEmail;
    }

    sendEmail({toEmail, subject, body}){
        return new Promise((resolve, reject) => {
            this.transporter.sendMail({
                from: this.email,
                to: toEmail,
                subject: subject,
                text: body
            }).then(r =>{
                console.log(r);
                //supongo que si no tiene OK en el response, fallo el envio.. a chequear
                let response = r.response; 
                if(response.includes('OK')) resolve('success');
                else reject(new Error('hubo un error'));
            })
        });
    }


}

module.exports = {EmailManager}