const express = require('express');
const app = express();
const morgan = require('morgan');


//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('json spaces' ,2);


//middlewares
app.use(morgan('dev'));
//este metodo permite al servidor recibir formatos json
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//rutas
app.use(require('./rutas/index'));


//empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});