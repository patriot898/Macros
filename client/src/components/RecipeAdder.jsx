import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
  width: 20em;
  background: alice-blue;
  border: thin solid black;
  height: 20em;
`;

const AddIngredientButton = styled.button `
clear: left;

`;

const RemoveIngredientButton = styled.button `
  display: ${(props) => props.id === 'entry0' ? 'none' : 'block'};
  float: left;
  clear: right;
`

const ItemEntryInput = styled.input`
  width: 65%;
  float: left;
  clear: ${(props) => props.id === 'entry0' ? 'right' : 'none'};
`;

const IngredientLineDiv = styled.div`

`

const AddRecipeButton = styled.button`

`;

const TypeDropdown = styled.select`

`;


const Header = styled.h2`

`;

const IngredientLine = (props) => {
  return (
    <IngredientLineDiv>
      <ItemEntryInput id={props.id} value={props.value} onChange={props.change} />
      <RemoveIngredientButton id={props.id} onClick={props.remove}>Remove</RemoveIngredientButton>
    </IngredientLineDiv>
  )
}

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

  removeIngredient(event) {
    const ingredients = this.state.ingredients.filter((ingredient) => {
      return `entry${ingredient.id}` !== event.target.id;
    });
    this.setState({ ingredients });
  }

  render() {
    return (
      <Wrapper>
        <Header>Add A Recipe or Item</Header>
        {this.state.ingredients.map((ingredient) =>
          <IngredientLine id={`entry${ingredient.id}`} value={ingredient.value} change={this.onChange.bind(this)} remove={this.removeIngredient.bind(this)}/>
        )}
        <AddIngredientButton onClick={this.addIngredient.bind(this)}>Add Ingredient</AddIngredientButton>
        <br></br>
        <AddRecipeButton>Add Recipe</AddRecipeButton>
      </Wrapper>
    )

  }
}

export default RecipeAdder;