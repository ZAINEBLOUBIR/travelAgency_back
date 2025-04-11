const express = require('express');
const router = express.Router();
const { getTourDetails, addTourDetail } = require('../controllers/tourDetailController');

router.get('/', getTourDetails);
router.post('/', addTourDetail);

module.exports = router;