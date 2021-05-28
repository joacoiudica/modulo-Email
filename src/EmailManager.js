var nodemailer = require('nodemailer');

const service = 'Gmail';

const success = 'Email enviado correctamente';
const fail = 'Ha fallado el envio de mail';

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
                if(response.includes('OK')) resolve(success);
                else reject(new Error(`${fail} =>  response`));
            })
        });
    }

    sendEmailWithHTML({toEmail, subject, html}){
        return new Promise((resolve, reject) => {
            let mail = {
                from: this.senderEmail,
                to: toEmail,
                subject: subject,
                html: html
            }
            this.transporter.sendMail(mail).then(r =>{
                let response = r.response; 
                if(response.includes('OK')) resolve(success);
                else reject(new Error(`${fail} =>  response`));
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
                if(response.includes('OK')) resolve(success);
                else reject(new Error(`${fail} =>  response`));
            });
        })
    }

}

module.exports = {EmailManager}