const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  macros: {
    calories: Number,
    carbs: Number,
    protein: Number,
    fat: Number
  },
  ingredients: [{
    name: String,
    amount: Number,
    unit: String
  }],
  type: String, // main, shake, side
  group: String, // fruit, vegetable, dairy
  meal: String, // breakfast, lunch/dinner
  pairing: String // if main: rice, potatoes, etc
});
