const PopularTour = require('../models/PopularTour');

exports.getAllPopularTours = async (req, res) => {
  try {
    const tours = await PopularTour.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPopularTour = async (req, res) => {
  const { title, image, location, category, days, price, afterDiscount, rating, reviews } = req.body;
  try {
    const newTour = new PopularTour({ title, image, location, category, days, price, afterDiscount, rating, reviews });
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};