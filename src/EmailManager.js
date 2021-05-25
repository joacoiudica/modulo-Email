var nodemailer = require('nodemailer')

class EmailManager {
    
    constructor(fromEmail, password){
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: fromEmail,
                pass: password
            }
        })
        this.email = fromEmail;
        this.pass = password;
    }


    async sendEmail(toEmail, subject, body){
        return new Promise((resolve, reject) => {
            const response = await this.transporter.sendMail({
                from: this.email,
                to: toEmail,
                subject: subject,
                text: body
            });
            if(response.messageId) resolve(response.messageId);
            else if(response.rejected) reject(response.rejected);
        });
    }


}

module.exports = {EmailManager}