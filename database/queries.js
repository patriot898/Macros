const mongoose = require('mongoose');
const Recipe = require('./schema.js');

const addRecipe = (recipe, callback) => {
  const newRecipe = new Recipe(recipe);
  newRecipe.save((err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const getRecipes = (callback) => {
  console.log('Getting recipes!');
  Recipe.find({}, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  });
};

module.exports = { addRecipe, getRecipes };
