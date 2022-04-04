const router = require('express').Router();

const { status } = require('express/lib/response');
const conexion = require('./config/conexion');
//asignamos todas las rutas

//obtener todos los clintes
router.get('/',(req, res)=>{
    let sql = 'SELECT ci.id, date(ci.fecha) as fecha, ci.hora, se.nombre as servicio, cl.nombre as cliente, se.precio from cita ci inner join cliente cl on ci.id_cliente=cl.id inner join servicio se on se.id=ci.id_servicio where ci.atendido=true ORDER by fecha;';
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});

module.exports=router;