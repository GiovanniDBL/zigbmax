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
        host: "easyaccess.com.mx",
        porth: 465,
        secure: smtp - true,


        // service: 'gmail',
        auth: {
            user: 'webmaster@easyaccess.com.mx', // Cambialo por tu email
            pass: '&eXd_(g${p4m', // Cambialo por tu password

        }
    });
    const mailOptions = {
        from: `"${formulario.firstname}🔔 " <${formulario.email}>`,
        to: 'giovannibritolopez@hotmail.com', // Cambia esta parte por el destinatario
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