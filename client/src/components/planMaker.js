const planMaker = (recipes, calories) => {
  const breakfasts = recipes.filter((recipe) => filterType(recipe, "main")).filter((recipe) => filterMeal(recipe, "breakfast"));

  const lunch_dinners = recipes.filter((recipe) => filterType(recipe, "main")).filter((recipe) => filterMeal(recipe, "lunch-dinner"));

  const shakes = recipes.filter((recipe) => filterType(recipe, "shake"));
  const snacks = recipes.filter((recipe) => filterType(recipe, "snack"));
  const snacks = recipes.filter((recipe) => filterType(recipe, "side"));
}

const filterType = (item, type) => {
  if (item.type === type) {
    return true;
  }
  return false;
}

const filterMeal = (item, meal) => {
  if (item.meal === meal) {
    return true;
  }
  return false;
}