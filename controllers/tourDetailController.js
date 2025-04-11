const TourDetail = require('../models/TourDetail');

exports.getTourDetails = async (req, res) => {
  try {
    const details = await TourDetail.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addTourDetail = async (req, res) => {
  const { title, description, price, rating, reviews, tourInfo, highlights, itinerary, included, exclusion, images } = req.body;
  try {
    const newDetail = new TourDetail({ title, description, price, rating, reviews, tourInfo, highlights, itinerary, included, exclusion, images });
    await newDetail.save();
    res.status(201).json(newDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};