// controllers/caregiverController.js

const Caregiver = require('../models/caregiverSchema');

// Create a new caregiver profile
exports.createCaregiver = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, location, skills } = req.body;
        const caregiver = new Caregiver({
            firstName,
            lastName,
            email,
            phone,
            location,
            skills
        });
        await caregiver.save();
        res.status(201).json({ message: 'Caregiver profile created successfully', caregiver });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update caregiver profile
exports.updateCaregiver = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, location, skills } = req.body;
        const updatedCaregiver = await Caregiver.findByIdAndUpdate(req.params.id, {
            firstName,
            lastName,
            email,
            phone,
            location,
            skills
        }, { new: true });
        if (!updatedCaregiver) {
            return res.status(404).json({ message: 'Caregiver profile not found' });
        }
        res.status(200).json({ message: 'Caregiver profile updated successfully', caregiver: updatedCaregiver });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Retrieve caregiver profile by ID
exports.getCaregiverById = async (req, res) => {
    try {
        const caregiver = await Caregiver.findById(req.params.id);
        if (!caregiver) {
            return res.status(404).json({ message: 'Caregiver profile not found' });
        }
        res.status(200).json(caregiver);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete caregiver profile
exports.deleteCaregiver = async (req, res) => {
    try {
        const deletedCaregiver = await Caregiver.findByIdAndDelete(req.params.id);
        if (!deletedCaregiver) {
            return res.status(404).json({ message: 'Caregiver profile not found' });
        }
        res.status(200).json({ message: 'Caregiver profile deleted successfully', caregiver: deletedCaregiver });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
