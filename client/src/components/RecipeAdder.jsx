import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `

`;

const AddIngredientButton = styled.button `
`;

const AddRecipeButton = styled.button `

`;

const TypeDropdown = styled.select `

`;

class RecipeAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients = [];
      counter = 0;
    }
  }
  render() {
    return (
      <Wrapper>

      </Wrapper>
    )

  }
}