const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  muscleGroup: { type: String, required: true },
  reps: { type: String, required: true }
});

module.exports = mongoose.model('Workout', workoutSchema, 'workouts');
