const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileController = require('../controllers/fileController');
const listFileController = require('../controllers/listFileController');

const storage = multer.diskStorage({

  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('htmlFile'), fileController.uploadFile);
router.get('/upload/list', listFileController.listFile);

module.exports = router;
