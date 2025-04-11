const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title: String,
  des: String,
});

const imageSchema = new mongoose.Schema({
  original: String,
  thumbnail: String,
});

const tourDetailSchema = new mongoose.Schema({
  title: String,
  des: String,
  price: String,
  rating: String,
  reviews: String,
  tourInfo: [String],
  highlights: [String],
  itinerary: [itinerarySchema],
  included: [String],
  exclusion: [String],
  images: [imageSchema],
});

module.exports = mongoose.model("TourDetail", tourDetailSchema);
