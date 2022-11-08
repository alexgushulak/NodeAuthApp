const express = require('express');
const router = express.Router();
const { deletePrivateData } = require('../controllers/private');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, deletePrivateData);

module.exports = router;