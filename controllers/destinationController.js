const Destination = require('../models/Destination');

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addDestination = async (req, res) => {
  const { name, tours, image, link, shortDes } = req.body;
  try {
    const newDestination = new Destination({ name, tours, image, link, shortDes });
    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};