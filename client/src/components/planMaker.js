const planMaker = (recipes, goal) => {
  const breakfasts = shuffle(recipes.filter((recipe) => filterByType(recipe, "main")).filter((recipe) => filterByMeal(recipe, "breakfast")));
  const lunch_dinners = shuffle(recipes.filter((recipe) => filterByType(recipe, "main")).filter((recipe) => filterByMeal(recipe, "lunch-dinner")));
  const shakes = shuffle(recipes.filter((recipe) => filterByType(recipe, "shake")));
  const snacks = shuffle(recipes.filter((recipe) => filterByType(recipe, "snack")));
  const sides = shuffle(recipes.filter((recipe) => filterByType(recipe, "side")));

  const mealPlan = {
    breakfast: [],
    lunch: [],
    dinner: [],
    preWorkout: [],
    postWorkout: [],
    snacks: []
  }

  let totalCalories = 0;
  let met = false;

  while (!met) {

    //BREAKFAST
    if (mealPlan.breakfast.length) {
      mealPlan.breakfast.pop();
    }
    let breakfastIterator = 0;
    let currentBreakfast = breakfasts[breakfastIterator];
    let breakfastCalories = currentBreakfast.macros.calories/currentBreakfast.servings*currentBreakfast.defaultServing;
    mealPlan.breakfast.push(currentBreakfast);
    totalCalories += breakfastCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= breakfastCalories
      breakfastIterator += 1;
      currentBreakfast = breakfasts[breakfastIterator];
      breakfastCalories = currentBreakfast.macros.calories/currentBreakfast.servings*currentBreakfast.defaultServing;
      totalCalories += breakfastCalories;
      mealPlan.breakfast.pop();
      mealPlan.breakfast.push(currentBreakfast);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    //LUNCH

    if (mealPlan.lunch.length) {
      mealPlan.lunch.pop();
    }

    let lunchIterator = 0;
    let currentLunch = lunch_dinners[lunchIterator];
    let lunchCalories = currentLunch.macros.calories/currentLunch.servings*currentLunch.defaultServing;
    mealPlan.lunch.push(currentlunch);
    totalCalories += lunchCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= lunchCalories
      lunchIterator += 1;
      if(lunchIterator >= lunch_dinners.length) {
        lunch_dinners = shuffle(lunch_dinners);
        lunchIterator = 0;
      }
      currentlunch = breakfasts[lunchIterator];
      lunchCalories = currentLunch.macros.calories/currentLunch.servings*currentLunch.defaultServing;
      totalCalories += lunchCalories;
      mealPlan.lunch.pop();
      mealPlan.lunch.push(currentLunch);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }


    if (mealPlan.preWorkout.length) {
      mealPlan.preWorkout.pop();
    }

    let preWorkoutIterator = 0;
    let currentpreWorkout = shakes[preWorkoutIterator];
    let preWorkoutCalories = currentpreWorkout.macros.calories/currentpreWorkout.servings*currentpreWorkout.defaultServing;
    mealPlan.shakes.push(currentpreWorkout);
    totalCalories += preWorkoutCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= preWorkoutCalories
      preWorkoutIterator += 1;
      if(preWorkoutIterator >= shakes.length) {
        shakes = shuffle(shakes);
        preWorkoutIterator = 0;
      }
      currentpreWorkout = shakes[preWorkoutIterator];
      preWorkoutCalories = currentpreWorkout.macros.calories/currentpreWorkout.servings*currentpreWorkout.defaultServing;
      totalCalories += preWorkoutCalories;
      mealPlan.preWorkout.pop();
      mealPlan.preWorkout.push(currentpreWorkout);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    if (mealPlan.postWorkout.length) {
      mealPlan.postWorkout.pop();
    }

    let postWorkoutIterator = 0;
    let currentpostWorkout = shakes[postWorkoutIterator];
    let postWorkoutCalories = currentpostWorkout.macros.calories/currentpostWorkout.servings*currentpostWorkout.defaultServing;
    mealPlan.shakes.push(currentpostWorkout);
    totalCalories += postWorkoutCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= postWorkoutCalories
      postWorkoutIterator += 1;
      if(postWorkoutIterator >= shakes.length) {
        shakes = shuffle(shakes);
        postWorkoutIterator = 0;
      }
      currentpostWorkout = shakes[postWorkoutIterator];
      postWorkoutCalories = currentpostWorkout.macros.calories/currentpostWorkout.servings*currentpostWorkout.defaultServing;
      totalCalories += postWorkoutCalories;
      mealPlan.postWorkout.pop();
      mealPlan.postWorkout.push(currentpostWorkout);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    //SNACK 1

    if (mealPlan.snacks.length) {
      mealPlan.snacks.shift();
    }

    let snacksIterator = 0;
    let currentsnacks = snacks[snacksIterator];
    let snacksCalories = currentsnacks.macros.calories/currentsnacks.servings*currentsnacks.defaultServing;
    mealPlan.snacks.push(currentsnacks);
    totalCalories += snacksCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= snacksCalories
      snacksIterator += 1;
      if(snacksIterator >= snacks.length) {
        snacks = shuffle(snacks);
        snacksIterator = 0;
      }
      currentsnacks = snacks[snacksIterator];
      snacksCalories = currentsnacks.macros.calories/currentsnacks.servings*currentsnacks.defaultServing;
      totalCalories += snacksCalories;
      mealPlan.snacks.pop();
      mealPlan.snacks.push(currentsnacks);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }


// SIDES 1

    if (mealPlan.sides.length) {
      mealPlan.sides.shift();
    }

    let sidesIterator = 0;
    let currentsides = sides[sidesIterator];
    let sidesCalories = currentsides.macros.calories/currentsides.servings*currentsides.defaultServing;
    mealPlan.sides.push(currentsides);
    totalCalories += sidesCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= sidesCalories
      sidesIterator += 1;
      if(sidesIterator >= sides.length) {
        sides = shuffle(sides);
        sidesIterator = 0;
      }
      currentsides = sides[sidesIterator];
      sidesCalories = currentsides.macros.calories/currentsides.servings*currentsides.defaultServing;
      totalCalories += sidesCalories;
      mealPlan.sides.pop();
      mealPlan.sides.push(currentsides);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    //SNACK 2

    if (mealPlan.snacks.length > 1) {
      mealPlan.snacks.shift();
    }

    snacksIterator += 1;
    if(snacksIterator >= snacks.length) {
      snacks = shuffle(snacks);
      snacksIterator = 0;
    }
    currentsnacks = snacks[snacksIterator];
    snacksCalories = currentsnacks.macros.calories/currentsnacks.servings*currentsnacks.defaultServing;
    mealPlan.snacks.push(currentsnacks);
    totalCalories += snacksCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= snacksCalories
      snacksIterator += 1;
      if(snacksIterator >= snacks.length) {
        snacks = shuffle(snacks);
        snacksIterator = 0;
      }
      currentsnacks = snacks[snacksIterator];
      snacksCalories = currentsnacks.macros.calories/currentsnacks.servings*currentsnacks.defaultServing;
      totalCalories += snacksCalories;
      mealPlan.snacks.pop();
      mealPlan.snacks.push(currentsnacks);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }


    //SIDE 2

    if (mealPlan.sides.length > 1) {
      mealPlan.sides.shift();
    }

    sidesIterator += 1;
    if(sidesIterator >= sides.length) {
      sides = shuffle(sides);
      sidesIterator = 0;
    }
    currentsides = sides[sidesIterator];
    sidesCalories = currentsides.macros.calories/currentsides.servings*currentsides.defaultServing;
    mealPlan.sides.push(currentsides);
    totalCalories += sidesCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= sidesCalories
      sidesIterator += 1;
      if(sidesIterator >= sides.length) {
        sides = shuffle(sides);
        sidesIterator = 0;
      }
      currentsides = sides[sidesIterator];
      sidesCalories = currentsides.macros.calories/currentsides.servings*currentsides.defaultServing;
      totalCalories += sidesCalories;
      mealPlan.sides.pop();
      mealPlan.sides.push(currentsides);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }

    //SNACK 3
    if (mealPlan.snacks.length > 2) {
      mealPlan.snacks.shift();
    }

    snacksIterator += 1;
    if(snacksIterator >= snacks.length) {
      snacks = shuffle(snacks);
      snacksIterator = 0;
    }
    currentsnacks = snacks[snacksIterator];
    snacksCalories = currentsnacks.macros.calories/currentsnacks.servings*currentsnacks.defaultServing;
    mealPlan.snacks.push(currentsnacks);
    totalCalories += snacksCalories;

    while (isOver(totalCalories, goal)) {
      totalCalories -= snacksCalories
      snacksIterator += 1;
      if(snacksIterator >= snacks.length) {
        snacks = shuffle(snacks);
        snacksIterator = 0;
      }
      currentsnacks = snacks[snacksIterator];
      snacksCalories = currentsnacks.macros.calories/currentsnacks.servings*currentsnacks.defaultServing;
      totalCalories += snacksCalories;
      mealPlan.snacks.pop();
      mealPlan.snacks.push(currentsnacks);
    }

    if(!isUnder(totalCalories, goal)) {
      return mealPlan;
    }


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
  for(let i = array.length - 1; i > 0; i -= 1){
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const isOver = (current, goal) => {
  if (current > goal * 1.05) {
    return true;
  }
  return false;
}

const isUnder = (current, goal) => {
  if (current < goal * 0.95) {
    return true;
  }
  return false;
}

module.exports = planMaker;