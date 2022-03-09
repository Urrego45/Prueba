const {Router} = require('express');
const router = Router();

const { getUsers, createUser, deleteUser,updateUser,getOneUsers, login } = require('../Controllers/Usuario')

router.route('/')
    .get(getUsers)
    

router.route('/crear')
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)
    .put(updateUser)
    .get(getOneUsers)

router.route('/login')
    .post(login)

module.exports = router;