import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 18px rgba(0, 0, 0, .15);
  width: 25em;
  border: 1px solid #ccc;
  padding: 1em;
  margin: 3em;
  display: ${ (props) => props.show ? 'inline-block' : 'none'} ;
  vertical-align: top
`;

const InputContainer = styled.div`
  width: 20em;
  padding-bottom: 1em;
`;

const StatInput = styled.input`
`;

const InputLabel = styled.label`
  margin-right: 0.5em;
`;

const CalcForm = styled.form`
`;

const Dropdown = styled.select`
`;

const CalculateButton = styled.button`
`;

const CalculatedDisplay = styled.div`
  width: 20em;
`;

const CalculatedValue = styled.h4`
`

class TdeeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      bodyFat: null,
      exerciseLevel: '1.2',
      goal: '1',
      bmr: null,
      tdee: null,
      dcr: null
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  calculate(event) {
    event.preventDefault();
    const bmr = parseInt(parseInt(this.state.weight) / 2.2 * (1 - this.state.bodyFat / 100) * 21 + 370); // Katch-Mcardle Equation
    const tdee = parseInt(bmr * parseFloat(this.state.exerciseLevel));
    const dcr = parseInt(tdee * parseFloat(this.state.goal));
    this.setState({
      tdee, bmr, dcr
    })
    this.props.updateCalories(dcr);
  }

  reset() {

  }


  render() {
    return (
      <Wrapper show={this.props.show}>
        <CalcForm>
          <InputContainer>
            <InputLabel>Weight (lbs)</InputLabel>
            <StatInput onChange={this.handleChange.bind(this)} id="weight"></StatInput>
          </InputContainer>
          <InputContainer>
            <InputLabel>Body Fat %</InputLabel>
            <StatInput onChange={this.handleChange.bind(this)} id="bodyFat"></StatInput>
          </InputContainer>
          <InputContainer>
            <InputLabel>Exercise Level</InputLabel>
            <Dropdown onChange={this.handleChange.bind(this)} id="exerciseLevel">
              <option value="1.1">Sedentary</option>
              <option value="1.3">Light</option>
              <option value="1.4">Moderate</option>
              <option value="1.5">Heavy</option>
              <option value="1.7">Athletic</option>
            </Dropdown>
          </InputContainer>
          <InputContainer>
            <InputLabel>Goal</InputLabel>
            <Dropdown onChange={this.handleChange.bind(this)} id="goal" defaultValue="1">
              <option value="0.8">Cut</option>
              <option value="1">Maintain</option>
              <option value="1.2">Bulk</option>
            </Dropdown>
          </InputContainer>
          <CalculateButton onClick={this.calculate.bind(this)}>Calculate</CalculateButton>
        </CalcForm>
        <CalculatedDisplay>
          <CalculatedValue id="bmr">BMR: {this.state.bmr}</CalculatedValue>
          <CalculatedValue id="tdee">TDEE: {this.state.tdee}</CalculatedValue>
          <CalculatedValue id="dailyCalories">Daily Caloric Requirement: {this.state.dcr}</CalculatedValue>
        </CalculatedDisplay>
      </Wrapper>
    )
  }
}

export default TdeeCalculator;