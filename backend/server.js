const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const disasterRoutes = require("./routes/disasterRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // ✅ Enable CORS to allow frontend requests
app.use(express.json()); // ✅ Parse JSON request bodies

// Routes
app.use("/api/disasters", disasterRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

// Start Server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
