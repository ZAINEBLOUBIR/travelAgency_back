const express = require('express');
const router = express.Router();
const { getAllPopularTours, addPopularTour } = require('../controllers/popularTourController');

router.get('/', getAllPopularTours);
router.post('/', addPopularTour);

module.exports = router;