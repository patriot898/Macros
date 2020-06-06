import React from 'react';
import styled from 'styled-components';

// const checkRecipe = (recipe, type) => {
//   if (recipe.)
// }

const Wrapper = styled.div`
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
        {/* {recipes.map((recipe) => )} */}

      </DisplayBlock>
      <DisplayBlock>
        <Header id="shakes">Shakes</Header>
      </DisplayBlock>
      <DisplayBlock>
        <Header id="sides">Sides</Header>
      </DisplayBlock>
      <DisplayBlock>
        <Header id="snacks">Snacks</Header>
      </DisplayBlock>
    </Wrapper>

  )
}

export default FoodDisplay;