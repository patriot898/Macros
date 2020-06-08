import React from 'react';
import $ from 'jquery';
import TdeeCalculator from './TdeeCalculator.jsx';
import FoodDisplay from './FoodDisplay.jsx';
import RecipeAdder from './RecipeAdder.jsx';
import testData from './testNutrition.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyCalories: null,
      recipes: [{name: 'none', type: 'none'}],
      nutrition: testData,
      showAddRecipeModal: false
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleShowRecipeModal() {
    this.setState({
      showAddRecipeModal: true
    });
  }

  handleHideRecipeModal() {
    this.setState({
      showAddRecipeModal: false
    });
  }

  evaluateRecipe(recipe) {
    // console.log(recipe);
    $.ajax({
      method: 'post',
      url: '/nutrition',
      data: recipe,
      success: (nutrition) => {
        console.log(nutrition);
        this.setState({ nutrition }, () => {
          this.handleShowRecipeModal();
        });
      },
      dataType: 'json',
      error: (err) => {
        alert(err);
      }
    });
  }

  addRecipe(recipe) {
    $.ajax({
      method: 'post',
      url: '/recipes',
      data: recipe,
      success: () => {
        alert("Recipe Added");
        this.setState({
          nutrition: null
        });
      },
      error: (err) => {
        alert(JSON.stringify(err));
      }
    });
  }

  getRecipes() {
    $.ajax({
      method: 'get',
      url: '/recipes',
      success: (recipes) => {
        this.setState({
          recipes
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateCalories(dailyCalories) {
    this.setState({
      dailyCalories
    });
  }


  render() {
    return (
      <div>
        <TdeeCalculator updateCalories={this.updateCalories.bind(this)}
        dailyCalories={this.state.dailyCalories}/>
        <FoodDisplay recipes={this.state.recipes}/>
        <RecipeAdder
        evaluate={this.evaluateRecipe.bind(this)}
        add={this.addRecipe.bind(this)}
        nutrition={this.state.nutrition}
        recipes={this.state.recipes}
        showAddRecipeModal={this.state.showAddRecipeModal}
        handleHideRecipeModal={this.handleHideRecipeModal.bind(this)}
        handleShowRecipeModal={this.handleShowRecipeModal.bind(this)}
        />
      </div>
    )
  }
}

export default App;
