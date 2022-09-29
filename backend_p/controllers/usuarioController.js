var Usuario = require('../models/usuario');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const registro_usuario_admin = async function(req,res){
    
    if(req.user){
        let data = req.body;

    let usuarios = await Usuario.find({email: data.email});

    if(usuarios.length >= 1){
        res.status(200).send({data:undefined,message:'El correo electrónico ya existe'});
    }else{
        bcrypt.hash('123456',null,null,async function(err,hash){
            if(err){
                res.status(200).send({data:undefined,message:'No se pudo encriptar la contraseña'});
            }else{
                
                data.password = hash;
                let usuario = await Usuario.create(data);
                res.status(200).send({data:usuario});
            }
        });
      }
    }else{
        res.status(500).send({data:undefined,message:'ErrorToken'});
    }


}

const login_usuario = async function(req,res){
    var data = req.body;
    var usuarios = await Usuario.find({email: data.email});
    
    if(usuarios.length >= 1){
        //correo existe
        bcrypt.compare(data.password, usuarios[0].password, async function(err,check){
            if(check){
                //
                res.status(200).send({
                    token:jwt.createToken(usuarios[0]),
                    usuario: usuarios[0]
                    });
                console.log("\n"+
                "\n"+"---- Bienvenido al panel administrador "+ usuarios[0].nombres+" ----"+
                "\n        "+ "Email: " +usuarios[0].email+
                "\n        "+ "Rol: " +usuarios[0].rol+
                "\n------------------------------------------------");
            }else{
                res.status(200).send({data:undefined,message:'La Contraseña es Incorrecta.'});
            }
            
        });
    }else{
        res.status(200).send({data:undefined,message:'No se encontro el correo electrónico.'});
    }
}

module.exports = {
    registro_usuario_admin,
    login_usuario
}