const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Is Required"],
        minLength: [3, "Must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Pet Type Is Required"],
        minLength: [3, "Must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description Is Required"],
        minLength: [3, "Must be at least 3 characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
}, { timestamps: true });

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;