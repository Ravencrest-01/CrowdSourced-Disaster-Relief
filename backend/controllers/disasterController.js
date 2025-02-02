const Disaster = require("../models/Disaster");

const createDisaster = async (req, res) => {
    try {
        const { type, city, state, severity } = req.body;

        if (!type || !city || !state || !severity) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const disaster = new Disaster({
            type,
            city,
            state,
            severity,
        });

        await disaster.save();
        res.status(201).json(disaster);
    } catch (error) {
        console.error("❌ Error creating disaster:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllDisasters = async (req, res) => {
    try {
        const disasters = await Disaster.find();
        res.json(disasters);
    } catch (error) {
        console.error("❌ Error fetching disasters:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { createDisaster, getAllDisasters };
