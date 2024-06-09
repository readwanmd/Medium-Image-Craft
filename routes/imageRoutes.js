const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const articleControler = require('../controllers/articleControler');

router.get('/generate-image/:username', imageController.generateImage);
router.get('/article-origin/:username', articleControler.getArticleOrigin);

module.exports = router;
