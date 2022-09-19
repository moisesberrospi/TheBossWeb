var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'manuel';

exports.createToken = function(usuario){

    var payload = {
        sub: usuario._id,
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        email: usuario.email,
        rol: usuario.rol,
        iat: moment().unix(),//fecha creación token
        exp: moment().add(1,'day').unix()//fecha exp token
    }

    return jwt.encode(payload,secret);
}