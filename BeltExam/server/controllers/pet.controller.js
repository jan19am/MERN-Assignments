const Pet = require('../models/pet.model');

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
    .then(newPet => {
        res.json({ pet: newPet })
    })
    .catch((err) => {
        res.status(400).json({ message: 'Something went wrong with create', error: err})
    });
}

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then((allPets) => {
            res.json({ pet: allPets })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong with find all', error: err})
        });
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(singlePet => {
            res.json({ pet: singlePet })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong with find one', error: err})
        });
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            res.json({ pet: updatedPet })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong with update', error: err})
        });
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong with delete', error: err})
        });
}