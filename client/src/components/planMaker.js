const planMaker = (recipes, goal) => {
  let breakfasts = shuffle(recipes.filter((recipe) => filterByType(recipe, "main")).filter((recipe) => filterByMeal(recipe, "breakfast")));
  let lunch_dinners = shuffle(recipes.filter((recipe) => filterByType(recipe, "main")).filter((recipe) => filterByMeal(recipe, "lunch-dinner")));
  let shakes = shuffle(recipes.filter((recipe) => filterByType(recipe, "shake")));
  let snacks = shuffle(recipes.filter((recipe) => filterByType(recipe, "snack")));
  let sides = shuffle(recipes.filter((recipe) => filterByType(recipe, "side")));

  const mealPlan = {
    breakfast: [],
    lunch: [],
    dinner: [],
    preWorkout: [],
    postWorkout: [],
    snacks: [],
    sides: []
  }

  let totalCalories = 0;
  let met = false;
  let breakfastIterator = 0;
  let lunchIterator = 0;
  let shakeIterator = 0;
  let snacksIterator = 0;
  let sidesIterator = 0;
  debugger;

  while (!met) {

    //BREAKFAST
    if (mealPlan.breakfast.length > 0) {
      mealPlan.breakfast.pop();
      totalCalories -= breakfastCalories;
    }

    if (breakfastIterator >= breakfasts.length) {
      breakfasts = shuffle(breakfasts);
      breakfastIterator = 0;
    }

    let currentBreakfast = breakfasts[breakfastIterator];
    let breakfastCalories = currentBreakfast.macros.calories / currentBreakfast.servings * currentBreakfast.defaultServing;
    mealPlan.breakfast.push(currentBreakfast);
    totalCalories += breakfastCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= breakfastCalories
      breakfastIterator += 1;
      if (breakfastIterator >= breakfasts.length) {
        breakfasts = shuffle(breakfasts);
        breakfastIterator = 0;
      }
      currentBreakfast = breakfasts[breakfastIterator];
      breakfastCalories = currentBreakfast.macros.calories / currentBreakfast.servings * currentBreakfast.defaultServing;
      totalCalories += breakfastCalories;
      mealPlan.breakfast.pop();
      mealPlan.breakfast.push(currentBreakfast);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    breakfastIterator += 1;

    //LUNCH

    if (mealPlan.lunch.length > 0) {
      mealPlan.lunch.pop();
      totalCalories -= lunchCalories;
    }

    if (lunchIterator >= lunch_dinners.length) {
      lunch_dinners = shuffle(lunch_dinners);
      lunchIterator = 0;
    }

    let currentLunch = lunch_dinners[lunchIterator];
    let lunchCalories = currentLunch.macros.calories / currentLunch.servings * currentLunch.defaultServing;
    mealPlan.lunch.push(currentLunch);
    totalCalories += lunchCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= lunchCalories
      lunchIterator += 1;
      if (lunchIterator >= lunch_dinners.length) {
        lunch_dinners = shuffle(lunch_dinners);
        lunchIterator = 0;
      }
      currentlunch = breakfasts[lunchIterator];
      lunchCalories = currentLunch.macros.calories / currentLunch.servings * currentLunch.defaultServing;
      totalCalories += lunchCalories;
      mealPlan.lunch.pop();
      mealPlan.lunch.push(currentLunch);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    lunchIterator += 1;

    //PREWORKOUT

    if (shakeIterator >= shakes.length) {
      shakes = shuffle(shakes);
      shakeIterator = 0;
    }

    if (mealPlan.preWorkout.length > 0) {
      mealPlan.preWorkout.pop();
      totalCalories -= preWorkoutCalories;
    }

    let currentpreWorkout = shakes[shakeIterator];
    let preWorkoutCalories = currentpreWorkout.macros.calories / currentpreWorkout.servings * currentpreWorkout.defaultServing;
    mealPlan.preWorkout.push(currentpreWorkout);
    totalCalories += preWorkoutCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= preWorkoutCalories
      shakeIterator += 1;
      if (shakeIterator >= shakes.length) {
        shakes = shuffle(shakes);
        shakeIterator = 0;
      }
      currentpreWorkout = shakes[shakeIterator];
      preWorkoutCalories = currentpreWorkout.macros.calories / currentpreWorkout.servings * currentpreWorkout.defaultServing;
      totalCalories += preWorkoutCalories;
      mealPlan.preWorkout.pop();
      mealPlan.preWorkout.push(currentpreWorkout);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    shakeIterator += 1;

    //POSTWORKOUT

    if (shakeIterator >= shakes.length) {
      shakes = shuffle(shakes);
      shakeIterator = 0;
    }

    if (mealPlan.postWorkout.length > 0) {
      mealPlan.postWorkout.pop();
      totalCalories -= postWorkoutCalories;
    }


    let currentpostWorkout = shakes[shakeIterator];
    let postWorkoutCalories = currentpostWorkout.macros.calories / currentpostWorkout.servings * currentpostWorkout.defaultServing;
    mealPlan.postWorkout.push(currentpostWorkout);
    totalCalories += postWorkoutCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= postWorkoutCalories
      shakeIterator += 1;
      if (shakeIterator >= shakes.length) {
        shakes = shuffle(shakes);
        shakeIterator = 0;
      }
      currentpostWorkout = shakes[shakeIterator];
      postWorkoutCalories = currentpostWorkout.macros.calories / currentpostWorkout.servings * currentpostWorkout.defaultServing;
      totalCalories += postWorkoutCalories;
      mealPlan.postWorkout.pop();
      mealPlan.postWorkout.push(currentpostWorkout);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    //SNACK 1

    if (snacksIterator >= snacks.length) {
      snacks = shuffle(snacks);
      snacksIterator = 0;
    }

    if (mealPlan.snacks.length > 0) {
      let removedSnack = mealPlan.snacks.shift();
      totalCalories -= removedSnack.macros.calories;
    }


    let currentsnacks = snacks[snacksIterator];
    let snacksCalories = currentsnacks.macros.calories / currentsnacks.servings * currentsnacks.defaultServing;
    mealPlan.snacks.push(currentsnacks);
    totalCalories += snacksCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= snacksCalories
      snacksIterator += 1;
      if (snacksIterator >= snacks.length) {
        snacks = shuffle(snacks);
        snacksIterator = 0;
      }
      currentsnacks = snacks[snacksIterator];
      snacksCalories = currentsnacks.macros.calories / currentsnacks.servings * currentsnacks.defaultServing;
      totalCalories += snacksCalories;
      mealPlan.snacks.pop();
      mealPlan.snacks.push(currentsnacks);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    snacksIterator += 1;

    // SIDES 1

    if (sidesIterator >= sides.length) {
      sides = shuffle(sides);
      sidesIterator = 0;
    }

    if (mealPlan.sides.length > 0) {
      removedSide = mealPlan.sides.shift();
      totalCalories -= removedSide.macros.calories;
    }


    let currentsides = sides[sidesIterator];
    let sidesCalories = currentsides.macros.calories / currentsides.servings * currentsides.defaultServing;
    mealPlan.sides.push(currentsides);
    totalCalories += sidesCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= sidesCalories
      sidesIterator += 1;
      if (sidesIterator >= sides.length) {
        sides = shuffle(sides);
        sidesIterator = 0;
      }
      currentsides = sides[sidesIterator];
      sidesCalories = currentsides.macros.calories / currentsides.servings * currentsides.defaultServing;
      totalCalories += sidesCalories;
      mealPlan.sides.pop();
      mealPlan.sides.push(currentsides);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    sidesIterator += 1;

    //SNACK 2

    if (mealPlan.snacks.length > 1) {
      let removedSnack = mealPlan.snacks.shift();
      totalCalories -= removedSnack.macros.calories;
    }


    if (snacksIterator >= snacks.length) {
      snacks = shuffle(snacks);
      snacksIterator = 0;
    }

    currentsnacks = snacks[snacksIterator];
    snacksCalories = currentsnacks.macros.calories / currentsnacks.servings * currentsnacks.defaultServing;
    mealPlan.snacks.push(currentsnacks);
    totalCalories += snacksCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= snacksCalories
      snacksIterator += 1;
      if (snacksIterator >= snacks.length) {
        snacks = shuffle(snacks);
        snacksIterator = 0;
      }
      currentsnacks = snacks[snacksIterator];
      snacksCalories = currentsnacks.macros.calories / currentsnacks.servings * currentsnacks.defaultServing;
      totalCalories += snacksCalories;
      mealPlan.snacks.pop();
      mealPlan.snacks.push(currentsnacks);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    snacksIterator += 1;

    //SIDE 2

    if(sidesIterator >= sides.length) {
      sides = shuffle(sides);
      sidesIterator = 0;
    }

    if (mealPlan.sides.length > 1) {
      removedSide = mealPlan.sides.shift();
      totalCalories -= removedSide.macros.calories;
    }

    currentsides = sides[sidesIterator];
    sidesCalories = currentsides.macros.calories / currentsides.servings * currentsides.defaultServing;
    mealPlan.sides.push(currentsides);
    totalCalories += sidesCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= sidesCalories
      sidesIterator += 1;
      if (sidesIterator >= sides.length) {
        sides = shuffle(sides);
        sidesIterator = 0;
      }
      currentsides = sides[sidesIterator];
      sidesCalories = currentsides.macros.calories / currentsides.servings * currentsides.defaultServing;
      totalCalories += sidesCalories;
      mealPlan.sides.pop();
      mealPlan.sides.push(currentsides);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    sidesIterator += 1;

    //SNACK 3

    if (snacksIterator >= snacks.length) {
      snacks = shuffle(snacks);
      snacksIterator = 0;
    }

    if (mealPlan.snacks.length > 2) {
      let removedSnack = mealPlan.snacks.shift();
      totalCalories -= removedSnack.macros.calories;
    }

    currentsnacks = snacks[snacksIterator];
    snacksCalories = currentsnacks.macros.calories / currentsnacks.servings * currentsnacks.defaultServing;
    mealPlan.snacks.push(currentsnacks);
    totalCalories += snacksCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= snacksCalories
      snacksIterator += 1;
      if (snacksIterator >= snacks.length) {
        snacks = shuffle(snacks);
        snacksIterator = 0;
      }
      currentsnacks = snacks[snacksIterator];
      snacksCalories = currentsnacks.macros.calories / currentsnacks.servings * currentsnacks.defaultServing;
      totalCalories += snacksCalories;
      mealPlan.snacks.pop();
      mealPlan.snacks.push(currentsnacks);
    }

    if (!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    snacksIterator += 1;

  }
}

const filterByType = (item, type) => {
  if (item.type === type) {
    return true;
  }
  return false;
}

const filterByMeal = (item, meal) => {
  if (item.meal === meal) {
    return true;
  }
  return false;
}
const filterByName = (item, name) => {
  if (item.name === name) {
    return true;
  }
  return false;
}

const shuffle = (data) => {
  const array = data.slice();
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const isOver = (current, goal) => {
  if (current > goal * 1.1) {
    return true;
  }
  return false;
}

const isUnder = (current, goal) => {
  if (current < goal * 0.90) {
    return true;
  }
  return false;
}

module.exports = planMaker;