const router = require('express').Router();

const { status } = require('express/lib/response');
const conexion = require('./config/conexion');
//asignamos todas las rutas

//obtener todos las citas
router.get('/',(req, res)=>{
    let sql = 'SELECT ci.id, date(ci.fecha) as fecha, ci.hora, se.nombre as servicio, cl.nombre as cliente, se.precio from cita ci inner join cliente cl on ci.id_cliente=cl.id inner join servicio se on se.id=ci.id_servicio where ci.atendido=false ORDER by fecha;';
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});

//atender cita, convertir cita en una venta
router.get('/:id', (req, res)=>{
    const{id}=req.params;
    let sql = `update cita set atendido = true where id = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status:'la cita ha sido atendida'});
        }
    });
})

//agregar cita a la DB
router.post('/',(req, res)=>{
    const{fecha, hora, id_cliente, id_servicio, atendido}=req.body;
    let sql =  `insert into cita (fecha, hora, id_cliente, id_servicio, atendido) VALUES 
    ('${fecha}','${hora}',${id_cliente},${id_servicio},${atendido})`;
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status:'cita agregada'});
        }
    });
});
//actualizar equipo

module.exports=router;