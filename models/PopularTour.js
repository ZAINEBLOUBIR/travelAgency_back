const mongoose = require("mongoose");

const popularTourSchema = new mongoose.Schema({
  title: String,
  image: String,
  location: String,
  category: [String],
  days: String,
  price: Number,
  afterDiscount: Number,
  rating: Number,
  reviews: Number,
});

module.exports = mongoose.model("PopularTour", popularTourSchema);
