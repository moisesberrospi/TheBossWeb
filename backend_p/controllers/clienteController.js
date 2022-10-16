var Cliente = require('../models/cliente');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/cjwt');

const registro_cliente_ecommerce = async function(req,res){
        let data = req.body;

        let reg = await Cliente.find({email:data.email});

        if(reg.length >=1){
            res.status(200).send({message: 'El correo electrónico ya existe'});
        }else{

            bcrypt.hash(data.password,null,null,async function(err,hash){
                if(err){
                    res.status(200).send({message: 'Problema durante la encriptación'});
                }else{
                    data.password = hash;
                    let cliente = await Cliente.create(data);
                    res.status(200).send(cliente);
                }
            });

        }

    }   

    const login_cliente = async function(req,res){
    
            var data = req.body;
            data.email = data.email.toLowerCase();
            var clientes = await Cliente.find({email: data.email});
            
            if(clientes.length >= 1){
                //correo existe
                if(clientes[0].estado){
                    bcrypt.compare(data.password, clientes[0].password, async function(err,check){
                        if(check){
                            //
                            res.status(200).send({
                                token:jwt.createToken(clientes[0]),
                                cliente: clientes[0]
                                });
                            console.log("\n"+
                            "\n"+"---- Bienvenido al panel administrador "+ cliente[0].nombres+" ----"+
                            "\n        "+ "Email: " +clientes[0].email+
                            "\n------------------------------------------------");
                        }else{
                            res.status(200).send({data:undefined,message:'La Contraseña es Incorrecta.'});
                        }
                        
                    });
                }else{
                    res.status(200).send({data:undefined,message:'Su cuenta esta desactivada.'});
                }
            }else{
                res.status(200).send({data:undefined,message:'No se encontro el correo electrónico.'});
            }
        }


module.exports = {
    registro_cliente_ecommerce,
    login_cliente
}