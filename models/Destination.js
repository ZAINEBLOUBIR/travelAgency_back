const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: String,
  tours: String,
  image: String,
  link: String,
});

module.exports = mongoose.model("Destination", destinationSchema);
