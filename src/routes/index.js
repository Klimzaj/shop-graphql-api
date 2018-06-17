const express = require('express')
const router = express.Router()
// const booksController = require('../controllers/books-controller')
const notFoundController = require('../controllers/not-found-controller')
const controller = require('../controllers/controller.js')


router.get('/allCat', controller.allCat);
router.post('/addProduct', controller.addProduct);
router.post('/addUser', controller.addUser);
router.post('/buyProduct', controller.buyProduct);
router.post('/editMyInfo',controller.editMyInfo);
router.get('/myInfo/:id',controller.myInfo);
router.post('/deleteUser/:id',controller.deleteUser);
router.post('/deleteProduct/:id',controller.deleteProduct);
router.get('/allProducts',controller.allProducts);
router.get('/productBoughtId/:id',controller.productBoughtId);
router.get('/productCat/:id',controller.productCat);
router.get('/productId',controller.productId);
router.get('/login',controller.login);
router.get('/isLogin/:id',controller.isLogin);

router.get('*', notFoundController.show);

module.exports = router;