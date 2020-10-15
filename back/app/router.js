 const mainController = require('./controllers/mainController') 

const { Router } = require('express');

const router = Router();

router.get('/',mainController.test);

module.exports = router;