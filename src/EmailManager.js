var nodemailer = require('nodemailer');



class EmailManager {
    //los datos de auth no van a ser los mismos que de donde va a salir el mail?
    constructor(fromEmail){
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            //auth: auth <-- obtengo credenciales desde archivo
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
                if(r.response.contains('OK')) resolve('success');
                else reject(new Error('hubo un error'));
            })
        });
    }


}

module.exports = {EmailManager}