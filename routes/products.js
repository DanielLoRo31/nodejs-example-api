const express = require('express');
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/', productController.get);

router.post('/new', productController.post)


module.exports = router;