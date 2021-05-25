var nodemailer = require('nodemailer');

const service = 'Gmail';
/*
    Esta clase permite abstraer el servicio o libreria utilizada para enviar mails,
    por lo que cualquier cambio que se le quiera hacer o funcionalidad a agregar, solo
    se toca este codigo.
    En este caso decidi utilizar nodemailer, por la simplicidad de uso y funcionamiento
    correcto.
    Como servicio de mensajeria me decidi por gmail, lo cual es medio molesto por el tema
    de la autenticacion y como se maneja gmail con los logins, pero para el alcance de nuestro
    proyecto, creo que es mas que suficiente. 
    Otra posibilidad era usar amazon ses como servicio, pero era bastante complejo configurar
    una cuenta de amazon para poder utilizarlo.
    
*/
class EmailManager {
    constructor({user, pass}){
        this.transporter = nodemailer.createTransport({
            service: service,
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
                //console.log(r);
                let response = r.response; 
                if(response.includes('OK')) resolve('success'); //asumo que si no tiene OK en el response, fallo el envio..
                else reject(new Error('Ocurrio un error al mandar el mail'));
            })
        });
    }


}

module.exports = {EmailManager}