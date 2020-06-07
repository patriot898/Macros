import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div `
  width: 20em;
  background: alice-blue;
  border: thin solid black;
  height: 20em;
`;

const AddIngredientButton = styled.button `

`;

const AddRecipeButton = styled.button `

`;

const TypeDropdown = styled.select `

`;

const ItemEntryInput = styled.input `
  width: 90%;
`;

const Header = styled.h2 `

`;

class RecipeAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [{
        id: 0,
        value: ''
      }],
      counter: 0
    }
  }

  onChange(event) {
    const ingredients = this.state.ingredients;
    const targetIndex = ingredients.findIndex((ingredient) => {
      return `entry${ingredient.id}` === event.target.id;
    })
    ingredients[targetIndex].value = event.target.value;
    this.setState({ ingredients });
  }

  addIngredient() {
    const counter = this.state.counter + 1;
    const newIngredient = {
      id: counter,
      value: ''
    }
    const ingredients = this.state.ingredients;
    ingredients.push(newIngredient);
    this.setState({
      counter,
      ingredients
    });
  }

  render() {
    return (
      <Wrapper>
        <Header>Add A Recipe or Item</Header>
        {this.state.ingredients.map((ingredient) =>
        <ItemEntryInput id={`entry${ingredient.id}`} value={ingredient.value} onChange={this.onChange.bind(this)}/>
      )}
        <AddIngredientButton onClick={this.addIngredient.bind(this)}>Add Ingredient</AddIngredientButton>
        <br></br>
        <AddRecipeButton>Add Recipe</AddRecipeButton>
      </Wrapper>
    )

  }
}

export default RecipeAdder;