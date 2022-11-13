const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    userPass: { type: String, required: true },
    userEmail: { type: String, required: true }
});

module.exports = mongoose.model('Profile', profileSchema, 'Profiles');