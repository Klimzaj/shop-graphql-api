const express = require('express')
const router = express.Router()
// const booksController = require('../controllers/books-controller')
const notFoundController = require('../controllers/not-found-controller')
const controller = require('../controllers/controller.js')

// router.get('/productCat/:id',controller.productCat);
router.get('/userInfo/:id',controller.userInfo); //uzyc do nazwy wystawiajacego produkt 


router.get('/productId/:id',controller.productId);

//done

router.get('/productBoughtId/:id',controller.productBoughtId);
router.post('/deleteProduct',controller.deleteProduct);
router.post('/buyProduct', controller.buyProduct);
router.get('/allproducts',controller.allProducts);
router.post('/addProduct', controller.addProduct);
router.post('/deleteUser',controller.deleteUser);
router.get('/allCat', controller.allCat);
router.post('/editMyInfo',controller.editMyInfo);
router.get('/myInfo/:id',controller.myInfo);
router.get('/isLogin/:log',controller.isLogin);
router.post('/addUser', controller.addUser);
router.get('/login',controller.login);


router.get('*', notFoundController.show);

module.exports = router;