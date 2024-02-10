// controllers/elderlyController.js

const Elderly = require('../models/elderlySchema');

// Create a new elderly profile
exports.createElderly = async (req, res) => {
    try {
        const { firstName, lastName, age, location, medicalHistory } = req.body;
        const elderly = new Elderly({
            firstName,
            lastName,
            age,
            location,
            medicalHistory
        });
        await elderly.save();
        res.status(201).json({ message: 'Elderly profile created successfully', elderly });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update elderly profile
exports.updateElderly = async (req, res) => {
    try {
        const { firstName, lastName, age, location, medicalHistory } = req.body;
        const updatedElderly = await Elderly.findByIdAndUpdate(req.params.id, {
            firstName,
            lastName,
            age,
            location,
            medicalHistory
        }, { new: true });
        if (!updatedElderly) {
            return res.status(404).json({ message: 'Elderly profile not found' });
        }
        res.status(200).json({ message: 'Elderly profile updated successfully', elderly: updatedElderly });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Retrieve elderly profile by ID
exports.getElderlyById = async (req, res) => {
    try {
        const elderly = await Elderly.findById(req.params.id);
        if (!elderly) {
            return res.status(404).json({ message: 'Elderly profile not found' });
        }
        res.status(200).json(elderly);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete elderly profile
exports.deleteElderly = async (req, res) => {
    try {
        const deletedElderly = await Elderly.findByIdAndDelete(req.params.id);
        if (!deletedElderly) {
            return res.status(404).json({ message: 'Elderly profile not found' });
        }
        res.status(200).json({ message: 'Elderly profile deleted successfully', elderly: deletedElderly });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
