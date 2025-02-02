const mongoose = require("mongoose");

const disasterSchema = new mongoose.Schema({
    type: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    severity: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Disaster", disasterSchema);
