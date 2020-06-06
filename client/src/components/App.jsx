import React from 'react';
import TdeeCalculator from './TdeeCalculator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render () {
    return (
      <div>Here is the app
        <TdeeCalculator />
      </div>
    )
  }
}

export default App;
