const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewsController');

router.use('/amen', newController.amen);
router.use('/', newController.index);

module.exports = router;
