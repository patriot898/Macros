import React from 'react';
import TdeeCalculator from './TdeeCalculator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyCalories: null
    }
  }

  updateCalories (dailyCalories) {
    this.setState({
      dailyCalories
    });

  }


  render () {
    return (
      <div>Here is the app
        <TdeeCalculator updateCalories={this.updateCalories.bind(this)}
        dailyCalories={this.state.dailyCalories}/>
      </div>
    )
  }
}

export default App;
