const express = require('express'); // Accedo a los archivos de la Lib.

const productos = require('./products') // Guardar en una variable la ruta de productos.

const system = require('./system') // Guardar en una variable la ruta de system.

const router = express.Router(); // Creo una instancia del Router y lo pongo en router.

router.use('/productos', productos); // Usar las rutas creadas.

router.use('/ping', system); // Usar las rutas creadas.

module.exports = router // Habilito la importación en otros lugares.