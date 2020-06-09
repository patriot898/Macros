import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: thin solid black;
  background: grey;
  width: fit-content;
  display: inline-block;
`;

const Header = styled.h3`

`;

const DisplayBlock = styled.div`
  padding: 1.5em;
`;

const MacroBlock = styled.div`
`

const Recipe = styled.div`

`;

const CalcMacros = (plan) => {
  const macros = {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0
  }

  for (let key in plan) {
    for (let meal of plan[key]) {
      macros.calories += meal.macros.calories / meal.servings;
      macros.carbs += meal.macros.carbs / meal.servings;
      macros.protein += meal.macros.protein / meal.servings;
      macros.fat += meal.macros.fat / meal.servings;
    }
  }
  return macros;
}


export default function PlanDisplay(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleHide}
      size="sm"
      centered="true">
      <ModalBody>
          <ModalHeader><h3>Meal Plan</h3></ModalHeader>
          <DisplayBlock>
            <Header id="breakfast">Breakfast</Header>
            {props.plan.breakfast.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
          </DisplayBlock>
          <DisplayBlock>
            <Header id="lunch">Lunch/Dinner</Header>
            {props.plan.lunch.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
          </DisplayBlock>
          <DisplayBlock>
            <Header id="preworkout">Pre-Workout</Header>
            {props.plan.preWorkout.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
          </DisplayBlock>
          <DisplayBlock>
            <Header id="postworkout">Post Workout</Header>
            {props.plan.postWorkout.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
          </DisplayBlock>
          <DisplayBlock>
            <Header id="snacks">Snacks</Header>
            {props.plan.snacks.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
          </DisplayBlock>
          <DisplayBlock>
            <Header id="sides">Sides</Header>
            {props.plan.sides.map((recipe) => <Recipe>{recipe.name}</Recipe>)}
          </DisplayBlock>
          <MacroBlock>Calories: {parseInt(CalcMacros(props.plan).calories)}kCal</MacroBlock>
          <MacroBlock>Carbs: {parseInt(CalcMacros(props.plan).carbs)}g</MacroBlock>
          <MacroBlock>Protein: {parseInt(CalcMacros(props.plan).protein)}g</MacroBlock>
          <MacroBlock>Fat: {parseInt(CalcMacros(props.plan).fat)}g</MacroBlock>

      </ModalBody>
    </Modal>
  )

}

