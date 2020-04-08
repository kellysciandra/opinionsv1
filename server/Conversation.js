const mongoose = require('mongoose');

const conversationsSchema = new mongoose.Schema({
    _id: String,
    title: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Conversation', conversationsSchema);