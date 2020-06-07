import React from 'react';
import styled from 'styled-components';

const checkRecipe = (recipe, type) => {
  if (recipe.type === type) {
    return (<Recipe>{recipe.name}</Recipe>);
  }
};

const Recipe = styled.div `

`;

const Wrapper = styled.div `
  border: thin solid black;
  width: fit-content;
  display: inline-block;
`;

const Header = styled.h2`

`;

const DisplayBlock = styled.div`
  display: inline-block;
  padding: 1.5em;
`



const FoodDisplay = ( {recipes} ) => {
  return (
    <Wrapper>
      <DisplayBlock>
        <Header id="mains">Main Courses</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'main'))}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="shakes">Shakes</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'shake'))}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="sides">Sides</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'side'))}
      </DisplayBlock>
      <DisplayBlock>
        <Header id="snacks">Snacks</Header>
        {recipes.map((recipe) => checkRecipe(recipe, 'snack'))}
      </DisplayBlock>
    </Wrapper>

  )
}

export default FoodDisplay;