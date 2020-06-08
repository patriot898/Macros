import React from 'react';
import $ from 'jquery';
import TdeeCalculator from './TdeeCalculator.jsx';
import FoodDisplay from './FoodDisplay.jsx';
import RecipeAdder from './RecipeAdder.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyCalories: null,
      recipes: [{name: 'none', type: 'none'}],
      nutrition: null,
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  evaluateRecipe(recipe) {
    // console.log(recipe);
    $.ajax({
      method: 'post',
      url: '/nutrition',
      data: recipe,
      success: (nutrition) => {
        console.log(nutrition);
        this.setState({ nutrition });
      },
      dataType: 'json',
      error: (err) => {
        alert(err);
      }
    });
  }

  setRecipes() {
   this.recipes = this.state.recipes;
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
        />
      </div>
    )
  }
}

export default App;
