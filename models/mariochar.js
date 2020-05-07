const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

// All fields in schema are optional
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema) // (collectionName, schema)

module.exports = MarioChar;


