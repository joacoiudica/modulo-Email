var nodemailer = require('nodemailer');
//var credentials = require('../mailcred/credentials.json'); 

class EmailManager {
    constructor({user, pass}){
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: user,
                pass: pass
            }
        })
        if(user) this.senderEmail = user;
    }

    sendEmail({toEmail, subject, body}){
        return new Promise((resolve, reject) => {
            this.transporter.sendMail({
                from: this.senderEmail,
                to: toEmail,
                subject: subject,
                text: body
            }).then(r =>{
                console.log(r);
                //supongo que si no tiene OK en el response, fallo el envio.. a chequear
                let response = r.response; 
                if(response.includes('OK')) resolve('success');
                else reject(new Error('hubo un error al mandar el mail'));
            })
        });
    }


}

module.exports = {EmailManager}