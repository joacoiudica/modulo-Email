var nodemailer = require('nodemailer');

const service = 'Gmail';

class EmailManager {
    constructor({user, pass}){
        this.transporter = nodemailer.createTransport({
            service: service,
            auth: {
                user: user,
                pass: pass
            }
        })
        this.senderEmail = user;
    }

    sendEmail({toEmail, subject, body}){ 
        return new Promise((resolve, reject) => {
            let mail = {
                from: this.senderEmail,
                to: toEmail,
                subject: subject,
                text: body
            }
            this.transporter.sendMail(mail).then(r =>{
                let response = r.response; 
                if(response.includes('OK')) resolve('success');
                else reject(new Error('Ocurrio un error al mandar el mail => ' + response));
            })
        });
    }

    sendEmailWithAttachment({toEmail, subject, body}, attachments){
        return new Promise((resolve, reject) => {
            let mail = {
                from: this.senderEmail,
                to: toEmail,
                subject: subject,
                text: body,
                attachments: attachments
            };
            this.transporter.sendMail(mail).then(r => {
                let response = r.response; 
                if(response.includes('OK')) resolve('success');
                else reject(new Error('Ocurrio un error al mandar el mail => ' + response));
            });
        })
    }

}

module.exports = {EmailManager}