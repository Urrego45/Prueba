const userCtrl = {};

const Usuario = require('../Models/Usuario')

userCtrl.getUsers = async (req, res) => {
    const users = await Usuario.find()
    res.json(users)
}

userCtrl.getOneUsers = async (req, res) => {
    const user = await Usuario.findById(req.params.id);
    res.json({status: 'uno'})
}

userCtrl.createUser = async (req, res) => {
    const {nombre, apellido, genero, nUsuario, clave} = req.body
    console.log(nombre, apellido, genero, nUsuario, clave);
    const newUser = new Usuario({nombre, apellido, genero, nUsuario, clave})
    await newUser.save();
    res.json('create user')
}

userCtrl.deleteUser = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({status: 'eliminado'})
}

userCtrl.updateUser = async(req,res)=> {
    const {nombre, apellido, genero, nUsuario, clave} = req.body
    const newUser = {nombre, apellido, genero, nUsuario, clave}
    await Usuario.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'actualizado'})
}

// Login

userCtrl.login = async(req,res)=> {
    const {nUsuario, clave} = req.body
    const users = await Usuario.find({nUsuario, clave})

    console.log(users);
    res.json({users});
}

module.exports = userCtrl;