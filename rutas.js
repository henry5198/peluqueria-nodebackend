const router = require('express').Router();

const { status } = require('express/lib/response');
const conexion = require('./config/conexion');
//asignamos todas las rutas
/*router.get('/', function(req, res){
    res.send('hola desde la api rutas');
});*/
//obtener todos los equipos
router.get('/',(req, res)=>{
    let sql = 'select * from tb_equipo';
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});

//obtener un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params;
    let sql = 'select * from tb_equipo where id = ?';
    conexion.query(sql, [id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});
//agregar equipo a la DB
router.post('/',(req, res)=>{
    const{nombre, ciudad}=req.body;
    let sql =  `insert into tb_equipo(nombre, ciudad) values('${nombre}','${ciudad}')`;
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status:'equipo agregado'+nombre+''});
        }
    });
});

//eliminar equipo
router.delete('/:id', (req, res)=>{
    const{id}=req.params;
    let sql = `delete from tb_equipo where id = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status:'eliminado correctamente'});
        }
    });
})
//actualizar equipo
router.put('/:id',(req, res)=>{
    const{id}=req.params;
    const{nombre, ciudad}=req.body;
    let sql =  `update tb_equipo set nombre='${nombre}', ciudad ='${ciudad}' where id = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status:'equipo actualizado'});
        }
    });
})
module.exports=router;