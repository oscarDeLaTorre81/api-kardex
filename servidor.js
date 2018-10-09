


var express= require('express');
var jwt=require('jsonwebtoken');

var puerto=process.env.PORT ||3000 ;

var app=express();
app.use(express.json());

app.get('/calificaciones',function(req, res){
    res.json({
        mensaje:'Bienvenido al API del Kardex'
    });
});

app.post('/login',function(req, res){
    var token=jwt.sign({
        usuario:'alumno'
        },'clavesupersecreta',{"expiresIn":"60s"});
        
        res.json({
            'respuesta':'token'
        });
        console.log('token generado: '+token);
});

app.listen(puerto,function(){
    console.log('servidor corriendo en el puerto '+puerto);
});

