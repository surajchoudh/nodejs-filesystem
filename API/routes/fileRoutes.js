const express = require('express');
const fileController = require('../controllers/fileController');

const router = express.Router();

router.post('/create', fileController.createFile);
router.get('/list', fileController.getAllFiles);

module.exports = router;
