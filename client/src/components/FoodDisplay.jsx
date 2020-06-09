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
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 18px rgba(0, 0, 0, .15);
  width: fit-content;
  border: 1px solid #ccc;
  padding: 1em;
  margin: 3em;
  display: ${ (props) => props.show ? 'inline-block' : 'none'} ;
`;

const Header = styled.h2`

`;

const DisplayBlock = styled.div`
  display: inline-block;
  padding: 1.5em;
  vertical-align: top;
`



const FoodDisplay = ( {recipes, show} ) => {
  return (
    <Wrapper show={show}>
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