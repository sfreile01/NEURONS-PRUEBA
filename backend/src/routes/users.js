const { Router } = require('express');
const router = Router();

const {  createUser, getUsers, updateUser} = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .put(updateUser)

module.exports = router;