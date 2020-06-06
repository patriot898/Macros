import React from 'react';
import TdeeCalculator from './TdeeCalculator.jsx';
import $ from 'jquery';

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
      </div>
    )
  }
}

export default App;
