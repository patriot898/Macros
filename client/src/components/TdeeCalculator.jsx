import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  border: thin solid black;
  background: grey;
  width: fit-content;
`;

const InputContainer = styled.div `
  width: 20em;
  padding-bottom: 1em;
`;

const StatInput = styled.input `
`;

const InputLabel = styled.label `
`;

const CalcForm = styled.form `
`;

const Dropdown = styled.select `
`;

const CalculateButton = styled.button `
`;

const CalculatedDisplay = styled.div `
  width: 20em;
`;

const CalculatedValue = styled.h3 `
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
      tdee: null
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
    const bmr = parseInt(parseInt(this.state.weight)/2.2 * (1 - this.state.bodyFat/100) * 21 + 370); // Katch-Mcardle Equation
    const tdee = parseInt(bmr * parseFloat(this.state.exerciseLevel));
    this.setState({
      bmr, tdee
    })

  }

  reset() {

  }


  render() {
    return (
      <Wrapper>
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
              <option value="1.2">Sedentary</option>
              <option value="1.375">Light</option>
              <option value="1.55">Moderate</option>
              <option value="1.725">Heavy</option>
              <option value="1.9">Athletic</option>
            </Dropdown>
          </InputContainer>
          <InputContainer>
            <InputLabel>Goal</InputLabel>
            <Dropdown onChange={this.handleChange.bind(this)} id="goal">
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
        </CalculatedDisplay>
      </Wrapper>
    )
  }
}

export default TdeeCalculator;