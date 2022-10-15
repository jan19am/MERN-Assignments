const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => {
        res.json({ author: newAuthor })
    })
    .catch((err) => {
        res.status(400).json({ message: 'Something went wrong', error: err})
    });
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json({ author: allAuthors })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err})
        });
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(singleAuthor => {
            res.json({ author: singleAuthor })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err})
        });
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ author: updatedAuthor })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err})
        });
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err})
        });
}