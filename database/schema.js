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
  type: String, // main, shake, side, snack
  group: String, // fruit, vegetable, dairy
  servings: {type: Number, default: 1},
  servingSize: { type: String, default: '1 unit' },
  meal: { type: String, default: 'any' }, // breakfast, lunch/dinner, any
  pairing: { type: String, default: 'none' }, // if main: rice, potatoes, etc.
});

recipeSchema.static('findByName', (name) => {
  return this.find({ name })
});

recipeSchema.static('findByType', (type) => {
  return this.find({ type })
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
