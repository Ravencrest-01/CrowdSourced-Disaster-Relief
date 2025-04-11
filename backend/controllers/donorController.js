import Donor from "../models/Donor.js";

// @desc    Create a donor
export const createDonor = async (req, res) => {
  try {
    const { name, email, donationAmount } = req.body;

    if (!name || !email || !donationAmount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const donor = new Donor({ name, email, donationAmount });
    await donor.save();

    res.status(201).json(donor);
  } catch (err) {
    console.error("Error creating donor:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all donors
export const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(donors);
  } catch (err) {
    console.error("Error fetching donors:", err);
    res.status(500).json({ message: "Server error" });
  }
};
