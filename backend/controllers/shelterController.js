const Shelter = require('../models/Shelter');

// @desc    Get all shelters
// @route   GET /api/shelters
// @access  Public
exports.getShelters = async (req, res) => {
    try {
        const shelters = await Shelter.find().sort({ createdAt: -1 });
        res.status(200).json(shelters);
    } catch (error) {
        console.error('Error fetching shelters:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Create a shelter report
// @route   POST /api/shelters
// @access  Public
exports.createShelter = async (req, res) => {
    try {
        const { shelterType, address, city, state } = req.body;
        
        // Basic validation
        if (!shelterType || !address || !city || !state) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        
        // Create new shelter
        const shelter = new Shelter({
            shelterType,
            address,
            city,
            state,
            // Add other fields as needed
        });
        
        // Save to database
        await shelter.save();
        
        res.status(201).json(shelter);
    } catch (error) {
        console.error('Error creating shelter report:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};