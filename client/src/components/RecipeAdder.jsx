import React from 'react';
import styled from 'styled-components';
import AdderModal from './AdderModal.jsx';

const Wrapper = styled.div`
  width: 20em;
  background: alice-blue;
  border: thin solid black;
  height: 20em;
`;

const AddIngredientButton = styled.button`
   clear: both;
   display: block;

`;

const RemoveIngredientButton = styled.button`
  display: ${(props) => props.id === 'entry0' ? 'none' : 'block'};
  float: left;
  clear: right;
`;

const ItemEntryInput = styled.input`
  width: 65%;
  float: left;
  clear: ${(props) => props.id === 'entry0' ? 'right' : 'none'};
`;

const IngredientLineDiv = styled.div`

`;

const EvaluateRecipeButton = styled.button`

`;

const TypeDropdown = styled.select`

`;

const Header = styled.h2`

`;

const TitleDiv = styled.div`

`;

const TitleInput = styled.input`

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
      counter: 0,
      addButtonText: 'Item',
      title: '',
      showAdderModal: false
    }
  }

  handleShowModal() {
    this.setState({
      showAdderModal: true
    });
  }

  handleHideModal() {
    this.setState({
      showAdderModal: false
    });
  }

  onTitleChange(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onIngredientChange(event) {
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
      ingredients,
      addButtonText: 'Recipe'
    });
  }

  removeIngredient(event) {
    const ingredients = this.state.ingredients.filter((ingredient) => {
      return `entry${ingredient.id}` !== event.target.id;
    });
    let addButtonText = 'Recipe';
    if (ingredients.length === 1) {
      addButtonText = 'Item';
    }
    this.setState({ ingredients, addButtonText });
  }

  evaluateRecipe() {
    const ingredients = [];
    this.state.ingredients.forEach(ingredient => {
      // all validation for ingredients can go here
      if (ingredient.value !== '') {
        ingredients.push(ingredient.value);
      }
    });
    const recipe = {};
    recipe.ingr = ingredients;
    recipe.title = this.state.title;
    this.handleShowModal();
    this.props.evaluate(recipe);
  }

  render() {
    return (
      <Wrapper>
        <Header>Add A Recipe or Item</Header>
        {this.state.ingredients.map((ingredient) =>
          <IngredientLine id={`entry${ingredient.id}`} value={ingredient.value} change={this.onIngredientChange.bind(this)} remove={this.removeIngredient.bind(this)} />
        )}
        <AddIngredientButton onClick={this.addIngredient.bind(this)}>Add Ingredient</AddIngredientButton>
        <br></br>
        <TitleDiv>
          Recipe/Item Title<TitleInput id="title" onChange={this.props.onTitleChange} />
        </TitleDiv>
        <EvaluateRecipeButton onClick={this.evaluateRecipe.bind(this)}>Evaluate {this.state.addButtonText}</EvaluateRecipeButton>
        <AdderModal showAdderModal={this.state.showAdderModal} handleHide={this.handleHideModal.bind(this)} />
      </Wrapper>
    )
  }
}

export default RecipeAdder;