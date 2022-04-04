const router = require('express').Router();

const { status } = require('express/lib/response');
const conexion = require('./config/conexion');
//asignamos todas las rutas

//obtener todos los clintes
router.get('/',(req, res)=>{
    let sql = 'select * from servicio';
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});

module.exports=router;