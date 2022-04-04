const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'db_apinode'
});

conexion.connect((err)=>{
    if(err){
        console.log('Ocurrio un error al conetar la DB '+err);
    }else{
        console.log('DB conecto con exito');
    }
});

module.exports=conexion;