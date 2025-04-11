const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const destinationRoutes = require("./Routes/destinations");
const popularTourRoutes = require("./Routes/popularTours");
const tourDetailRoutes = require("./Routes/tourDetail");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/destinations", destinationRoutes);
app.use("/api/popular-tours", popularTourRoutes);
app.use("/api/tour-detail", tourDetailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
