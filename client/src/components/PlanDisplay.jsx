import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: thin solid black;
  background: grey;
  width: fit-content;
  display: inline-block;
`;

const Header = styled.h3`

`;

const DisplayBlock = styled.div`
  padding: 1.5em;
`;

const Recipe = styled.div `

`;

const CalcMacros = (plan) => {
  const macros = {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0
  }

  for (let key in plan) {
    for (let meal of plan[key]) {
      macros.calories += meal.macros.calories/meal.servings;
      macros.carbs += meal.macros.carbs/meal.servings;
      macros.protein += meal.macros.protein/meal.servings;
      macros.fat += meal.macros.fat/meal.servings;
    }
  }
  return macros;
}

const checkRecipe = (recipe, type) => {
  if (recipe.type === type) {
    return (<Recipe>{recipe.name}</Recipe>);
  }
};

export default function PlanDisplay(props) {
  return (
    <Wrapper>
       <DisplayBlock>
        <Header id="breakfast">Breakfast</Header>
        {recipes.breakfast.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="lunch">Lunch/Dinner</Header>
        {recipes.lunch.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="preworkout">Pre-Workout</Header>
        {recipes.preworkout.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="postworkout">Post Workout</Header>
        {recipes.postworkout.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="snacks">Snacks</Header>
        {recipes.snacks.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="sides">Sides</Header>
        {recipes.sides.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
      </DisplayBlock>
    </Wrapper>
  )

}

