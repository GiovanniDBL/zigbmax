const nodemailer = require('nodemailer');


module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        // porth: 'a2plcpnl0248.prod.iad2.secureserver.net',

        // host: 'smtp.gmail.com',
        // port: 465,
        // secure: true, 

        // auth: {
        //     user: 'britodany12@gmail.com', 
        //     pass: 'D19942344', 


        // }
        host: "mail.zigbmax.com",
        secureConnection: false,
        port: 465,

        // service: 'gmail',
        auth: {
            user: 'info@zigbmax.com',
            pass: '1nf0#@21..',
            // user: 'webmaster@easyaccess.com.mx', 
            // pass: '&eXd_(g${p4m', 

        },
        debug: true,
        tls: {
            rejectUnauthorized: false,
        }
    });
    const mailOptions = {
        from: `"${formulario.firstname}🔔 " <${formulario.email}>`,
        to: 'info@zigbmax.com', // Cambia esta parte por el destinatario
        subject: "Zigbmax",
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