const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    activity: { type: String, required: true },
    duration: { type: String, required: true },
});

module.exports = mongoose.model('Calendar', calendarSchema, 'calendars');