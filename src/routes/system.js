const express = require('express'); // Accedo a los archivos de la Lib.

const router = express.Router(); // Instacio el router

router.get('/',(req, res)=>{
    return res.status(200).send({
        'Status':'ok'
    })
})

module.exports = router // Habilito la importación en otros lugares.