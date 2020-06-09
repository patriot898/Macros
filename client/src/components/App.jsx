import React from 'react';
import $ from 'jquery';
import TdeeCalculator from './TdeeCalculator.jsx';
import FoodDisplay from './FoodDisplay.jsx';
import RecipeAdder from './RecipeAdder.jsx';
import testData from './testNutrition.js';
import planMaker from './planMaker.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyCalories: null,
      recipes: [{ name: 'none', type: 'none' }],
      nutrition: testData.testNutrition,
      itemNutrition: testData.testItemNutrition,
      showAddRecipeModal: false,
      showAddItemModal: false,
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
  handleShowItemModal() {
    this.setState({
      showAddItemModal: true
    });
  }

  handleHideItemModal() {
    this.setState({
      showAddItemModal: false
    });
  }

  evaluateRecipe(recipe) {
    // console.log(recipe);
    $.ajax({
      method: 'post',
      url: '/nutrition',
      data: recipe,
      success: (results) => {
        console.log(results);
        if (recipe.ingr.length > 1) {
          this.setState({ nutrition: results }, () => {
            this.handleShowRecipeModal();
          });
        } else {
          this.setState({ itemNutrition: results }, () => {
            this.handleShowItemModal();
          });
        }
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
          nutrition: testData.testNutrition,
          itemNutrition: testData.itemNutrition
        }, () => {
          this.getRecipes()
        })
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
        }, ()=> {
          console.log(this.state.recipes);
          console.log(planMaker(recipes, 2500))
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
          dailyCalories={this.state.dailyCalories} />
        <FoodDisplay recipes={this.state.recipes} />
        <RecipeAdder
          evaluate={this.evaluateRecipe.bind(this)}
          addRecipe={this.addRecipe.bind(this)}
          nutrition={this.state.nutrition}
          itemNutrition={this.state.itemNutrition}
          recipes={this.state.recipes}
          showAddRecipeModal={this.state.showAddRecipeModal}
          showAddItemModal={this.state.showAddItemModal}
          handleHideRecipeModal={this.handleHideRecipeModal.bind(this)}
          handleShowRecipeModal={this.handleShowRecipeModal.bind(this)}
          handleHideItemModal={this.handleHideItemModal.bind(this)}
          handleShowItemModal={this.handleShowItemModal.bind(this)}
          getRecipes={this.getRecipes.bind(this)}
        />
      </div>
    )
  }
}

export default App;
