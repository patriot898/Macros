import React from 'react';
import $ from 'jquery';
import TdeeCalculator from './TdeeCalculator.jsx';
import FoodDisplay from './FoodDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyCalories: null
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    $.ajax({
      method: 'get',
      url: '/recipes',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

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
        <FoodDisplay />
      </div>
    )
  }
}

export default App;
