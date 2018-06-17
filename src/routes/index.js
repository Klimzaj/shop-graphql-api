const express = require('express')
const router = express.Router()
// const booksController = require('../controllers/books-controller')
const notFoundController = require('../controllers/not-found-controller')
const controller = require('../controllers/controller.js')
const controllerProduct = require('../controllers/controllerProduct')
const ordersController = require('../controllers/orderController')
const orderDetailsController = require('../controllers/orderDetailsController')
const productCategoryController = require('../controllers/productCategoryController')
const userAuthenticationController = require("../controllers/userAuthenticationController")

router.get('/user', controller.all)
router.get('/useraccountdata', controller.all)


router.get('/product', controllerProduct.all)
router.get('/orders', ordersController.all)
router.get('/order', ordersController.orderById)//axios get with body
router.get('/order/:id', ordersController.orderById2)
router.get('/orderdetails', orderDetailsController.all)
router.get('/productcategory', productCategoryController.all)
router.post('/product', controllerProduct.create)
router.get('/useraccount', userController.all)
router.get('/userlogin/:username', userAuthenticationController.login)
router.post('/product/:pid', controllerProduct.destroy);



// router.post('/books', booksController.create);
// router.get('/book/:id', booksController.get);
// router.put('/book/:id', booksController.update);
// router.delete('/book/:id', booksController.destroy);

router.get('*', notFoundController.show);

module.exports = router;