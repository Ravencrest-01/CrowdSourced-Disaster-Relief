const Resource = require('../models/Resource');

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find().sort({ createdAt: -1 });
        res.status(200).json(resources);
    } catch (error) {
        console.error('Error fetching resources:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Create a resource report
// @route   POST /api/resources
// @access  Public
exports.createResource = async (req, res) => {
    try {
        const { resourceType, address, city, state } = req.body;
        
        // Basic validation
        if (!resourceType || !address || !city || !state) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        
        // Create new resource
        const resource = new Resource({
            resourceType,
            address,
            city,
            state,
            // Add other fields as needed
        });
        
        // Save to database
        await resource.save();
        
        res.status(201).json(resource);
    } catch (error) {
        console.error('Error creating resource report:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};