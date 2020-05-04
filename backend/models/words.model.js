var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordSchema = new Schema({
    word: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    translation: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Word = mongoose.model('Word', wordSchema);
module.exports = Word;