const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "name must be 2 characters in length"]
    },
    position: {
        type: String,


    },
    game1: {
        type: Number,
        required: [true, "game1 is required"],
    },
    game2: {
        type: Number,
        required: [true, "game2 is required"],
    },
    game3: {
        type: Number,
        required: [true, "game3 is required"],
    }

}, { timestamps: true }
);

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
