const mongoose = require('mongoose');
const Recipe = require('./schema.js');

const orangeJuliusProtein = new Recipe({
  name: "Orange Julius Protein Shake",
  macros: {
    calories: 423,
    carbs: 75.7,
    protein: 29.6,
    fat: 1
  },
  type: "shake", // main, shake, side, snack
  servingSize: "1 shake",
});

const brownRice = new Recipe({
  name: "Brown Rice",
  macros: {
    calories: 137,
    carbs: 29,
    protein: 3,
    fat: 1
  },
  type: "side", // main, shake, side, snack
  servingSize: "1/4 cup dry",
  defaultServing: 1
});

const beefAndTomato = new Recipe({
  name: "Beef & Tomato",
  macros: {
    calories: 702,
    carbs: 14.4,
    protein: 108,
    fat: 22.5
  },
  type: "main", // main, shake, side, snack
  meal: "ld",
  servingSize: "1/3 batch",
  servings: 3,
  defaultServing: 1,
  pairing: {
    pair: "Brown Rice",
    mandatory: true
  }
});

const apple = new Recipe({
  name: "Apple",
  macros: {
    calories: 100,
    carbs: 24,
    protein: 1,
    fat: 0
  },
  type: "snack", // main, shake, side, snack
  group: "fruit",
  servingSize: "1 apple",
  defaultServing: 1
});

const snackPeppers = new Recipe({
  name: "Snack Peppers",
  macros: {
    calories: 35,
    carbs: 6,
    protein: 0,
    fat: 1
  },
  type: "snack", // main, shake, side, snack
  group: "fruit",
  servingSize: "4oz",
  defaultServing: 1
});


mongoose.connect('mongodb://localhost:27017/mealPlanner', {useNewUrlParser: true});

beefAndTomato.save();
snackPeppers.save();
apple.save();
orangeJuliusProtein.save();
brownRice.save();

