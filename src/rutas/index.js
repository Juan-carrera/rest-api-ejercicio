const {Router} = require('express');
const router = Router();


router.get('/',(req,res)=>{

    res.json({"Mensaje": "Hola:)"});

});

router.get('/api/ingresanumero/:numero',(req,res) => {

    //se obtiene,guarda y castea el valor obtenido del request
    let numero = parseInt(req.params.numero);
    
    //multiplicamos el valor por 3
    let valorMultiplicado = numero * 3;

    //se realiza la validacion si es par o impar
    if((valorMultiplicado % 2) === 0){

        //si es par se devuelve una respuesta en formato json
        res.json({
            "Numero ingresado" : numero,
            "Numero multiplicado por 3" : valorMultiplicado,
            "respuesta" : `${valorMultiplicado} es numero par`
        });
    } else {

        //si es impar se devuelve una respueta en formato json
        res.json({
            "Numero ingresado" : numero,
            "Numero multiplicado por 3" : valorMultiplicado,
            "respuesta" : `${valorMultiplicado} es numero impar`
        });
        
    }

});

module.exports = router;