


const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [10, "setup must be at least 10 characters long"]
    },
    punchLine: {
        type: String,
        required: [true, "punchLine is required"],
        minlength: [3, "punchLine must be at least 3 characters long"]
    }
}, { timestamps: true }
);

const User = mongoose.model('joke', JokeSchema);

module.exports = User;