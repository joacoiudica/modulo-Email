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
        let response = await this.transporter.sendMail({
            from: this.email,
            to: toEmail,
            subject: subject,
            text: body
        });
        return response;
    }


}

module.exports = EmailManager