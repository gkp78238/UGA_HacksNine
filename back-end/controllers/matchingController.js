// controllers/matchingController.js

const Caregiver = require('../models/caregiverSchema');
const Elderly = require('../models/elderlySchema');

// Function to match caregivers with elderly individuals
exports.matchCaregivers = async (req, res) => {
    try {
        // Fetch all caregivers from the database
        const caregivers = await Caregiver.find();

        // Fetch all elderly individuals from the database
        const elderly = await Elderly.find();

        // Perform matching algorithm (Sample logic, adjust as needed)
        const matches = caregivers.map(caregiver => {
            // Sample matching criteria: matching based on location
            const matchedElderly = elderly.find(elderly => {
                // Perform matching logic here (e.g., location proximity, skills match, etc.)
                return caregiver.location === elderly.location;
            });

            return {
                caregiverId: caregiver._id,
                elderlyId: matchedElderly ? matchedElderly._id : null,
                matchScore: matchedElderly ? calculateMatchScore(caregiver, matchedElderly) : 0
            };
        });

        res.status(200).json(matches);
    } catch (error) {
        console.error('Error matching caregivers with elderly:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Function to calculate match score (Sample function, adjust as needed)
function calculateMatchScore(caregiver, elderly) {
    // Sample logic to calculate match score based on caregiver and elderly profiles
    let matchScore = 0;

    // Example: calculate match score based on skills, preferences, etc.
    if (caregiver.skills.includes(elderly.requiredSkill)) {
        matchScore += 10;
    }

    // Add more matching criteria and adjust match score calculation as needed

    return matchScore;
}
