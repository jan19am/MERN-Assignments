const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/author", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Established Connection to DB"))
    .catch(err => console.log("Something went wrong", err));