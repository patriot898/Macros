import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: thin solid black;
  background: grey;
  width: fit-content;
`;

const InputContainer = styled.div`
  width: 20em;
  padding-bottom: 2em;
`;

const StatInput = styled.input`
`;

const InputLabel = styled.label`
`;

const CalcForm = styled.form`
`;

const Dropdown = styled.select`
`;

const CalculateButton = styled.button`
`;

const CalculatedDisplay = styled.div `
`;

const CalculatedValue = styled.h3 `
`

class TdeeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      bodyFat: null,
      exerciseLevel: null,
      goal: null
    }
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.id);
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    })
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
              <option value="cut">Cut</option>
              <option value="maintain">Maintain</option>
              <option value="bulk">Bulk</option>
            </Dropdown>
          </InputContainer>
          <CalculateButton>Calculate</CalculateButton>
        </CalcForm>
      </Wrapper>
    )
  }
}

export default TdeeCalculator;