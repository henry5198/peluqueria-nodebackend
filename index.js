require('./config/conexion');

const express = require('express');
const port = (process.env.port ||  3000);
//express
const app = express();
//admitir
app.use(express.json());
//config
app.set('port',port);
//rutas
app.use('/api',require('./rutas'));
app.use('/cliente',require('./cliente'));
app.use('/servicio',require('./servicio'));
app.use('/cita', require('./cita'));
app.use('/ventas', require('./venta'));

//iniciar express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('error al iniciar el servidor express '+error);
    }else{
        console.log('servidor inicio en el puerto '+port);
    }
});