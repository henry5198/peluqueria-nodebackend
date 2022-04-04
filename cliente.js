const router = require('express').Router();

const { status } = require('express/lib/response');
const conexion = require('./config/conexion');
//asignamos todas las rutas

//obtener todos los clintes
router.get('/',(req, res)=>{
    let sql = 'select * from cliente';
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }
    });
});

//agregar cliente a la DB
router.post('/',(req, res)=>{
    const{nombre, apellido, edad, genero, celular, email ,direccion}=req.body;
    let sql =  `INSERT INTO cliente (nombre, apellido, genero, edad, celular, email, direccion) VALUES 
    ('${nombre}','${apellido}','${genero}',${edad},'${celular}','${email}','${direccion}')`;
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status:'cliente agregado'});
        }
    });
});

//eliminar cliente
router.delete('/:id', (req, res)=>{
    const{id}=req.params;
    let sql = `delete from cliente where id = ${id}`;
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status:'eliminado correctamente'});
        }
    });
})

//actualizar equipo

module.exports=router;