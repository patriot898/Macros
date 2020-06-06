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
  ingredients: {
    type: [{
      name: String,
      amount: Number,
      unit: String
    }],
    default: []
  },
  type: String, // main, shake, side, snack
  group: {
    type: String,
    default: 'none'
  }, // fruit, vegetable, dairy
  servings: {type: Number, default: 1},
  servingSize: { type: String, default: '1 unit' },
  defaultServing: { type: Number, default: 1 },
  meal: { type: String, default: 'any' }, // breakfast, lunch/dinner, any
  pairing: {
    pair: { type: String, default: 'none' }, // if main: rice, potatoes, etc.
    mandatory: { type: Boolean, default: false}
  }
});

recipeSchema.static('findByName', (name) => {
  return this.find({ name })
});

recipeSchema.static('findByType', (type) => {
  return this.find({ type })
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
