import React from 'react';
import styled from 'styled-components';
import RecipeModal from './AdderModals.jsx';

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
      showAddRecipeModal: false,
      title: '',
      servings: '',
      type: 'snack',
      group: 'none',
      pair: 'none',
      servings: this.props.nutrition.yield || 1,
      defaultServing: '1',
      selectedFoodItem: null
    }
  }



  handleChange(event) {
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
    this.props.evaluate(recipe);
  }

  submitRecipe() {
    const recipe = {};
    recipe.macros.calories = this.props.nutrtion.calories;
    recipe.macros.carbs = parseInt(this.props.nutrition.totalNutrients.CHOCDF.quantity);
    recipe.macros.protein = parseInt(props.nutrition.totalNutrients.PROCNT.quantity)
    recipe.macros.fat = parseInt(props.nutrition.totalNutrients.FAT.quantity);
    recipe.group = this.state.group;
    recipe.servings = parseInt(this.state.servings);
    recipe.defaultServing = parseInt(this.state.defaultServing);
    recipe.meal = this.state.meal
    recipe.pairing = {
      pair: this.state.pair,
      mandatory: true
    }


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
          <label>Recipe/Item Title</label>
          <br></br>
          <TitleInput id="title" onChange={this.handleChange.bind(this)} />
        </TitleDiv>
        <EvaluateRecipeButton onClick={this.evaluateRecipe.bind(this)}>Evaluate {this.state.addButtonText}</EvaluateRecipeButton>
        <RecipeModal
          show={this.props.showAddRecipeModal}
          handleHide={this.props.handleHideRecipeModal}
          title={this.state.title}
          handleChange={this.handleChange.bind(this)}
          nutrition={this.props.nutrition}
          onSubmit={this.submitRecipe.bind(this)}
          recipes={this.props.recipes}
          />
      </Wrapper>
    )
  }
}

export default RecipeAdder;