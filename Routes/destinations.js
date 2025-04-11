const express = require('express');
const router = express.Router();
const { getAllDestinations, addDestination } = require('../controllers/destinationController');

router.get('/', getAllDestinations);
router.post('/', addDestination);

module.exports = router;