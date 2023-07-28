// importing express, router, multer, controller and view
const express = require('express');
const router = express.Router();
// Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files
const multer = require('multer');
const controller = require('../controller/homeController');
const { view } = require('../controller/viewController');
const upload = multer({ dest:'uploadFiles' })

// Creating get and post routing
router.get('/', controller.home);
router.post('/upload',upload.single('file'), controller.upload);
router.get('/delete/:id', controller.delete);
router.get('/view/:id', view);

module.exports = router;

