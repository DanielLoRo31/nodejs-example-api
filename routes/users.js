const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.get);

router.get('/:id', userController.getById)

router.post('/new', userController.post)

router.put('/update/:id', userController.put)

router.delete('/delete/:id', userController.delete)


module.exports = router;