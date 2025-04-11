// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Import routes
const disasterRoutes = require("./routes/disasterRoutes");
const shelterRoutes = require("./routes/shelterRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const donorRoutes = require("./routes/donorRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/disasters", disasterRoutes);
app.use("/api/shelters", shelterRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/donors", donorRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
