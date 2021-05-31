const express = require('express');
const cors = require('cors');
const configMensaje = require('./configMensaje');




// Invocamos express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//** Envíar correo desde el formulario contacto ZigbMax */
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})

// *Start Server
app.listen(3000, () => {
    console.log("Servicio ZigbMax Corriendo");
    console.log("*****************************************");
});