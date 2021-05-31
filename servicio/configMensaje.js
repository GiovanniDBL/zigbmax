const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({

        host: 'zigbmax.com',
        porth: 465,
        secure: true,

        // service: 'gmail',
        auth: {
            user: 'info@zigbmax.com', // Cambialo por tu email
            pass: '1nf0#@21..' // Cambialo por tu password

        }
    });
    const mailOptions = {
        from: `"${formulario.firstname}👋🔔" <${formulario.email}>`,
        to: 'info@zigbmax.com', // Cambia esta parte por el destinatario
        subject: "Prueba",
        html: `
 <strong>Nombre:</strong> ${formulario.firstname} ${formulario.lastname} <br/>
 <strong>Telefono:</strong> ${formulario.phone} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.message}
 `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}