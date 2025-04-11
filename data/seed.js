const mongoose = require("mongoose");
require("dotenv").config();
const Destination = require("../models/Destination");

const destinationsData = [
  {
    name: "Bali",
    tours: "5 tours and activities",
    image: "/images/tour/bali-1.png",
    link: "tour-name",
  },
  {
    name: "Tokyo",
    tours: "9 tours and activities",
    image: "/images/tour/Tokyo.png",
    link: "tour-name",
  },
  // Add the rest...
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Destination.deleteMany();
    await Destination.insertMany(destinationsData);
    console.log("Destinations seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();
