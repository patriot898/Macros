import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'
import { RecipeModal, ItemModal } from './AdderModals.jsx';

const Wrapper = styled.div`
 margin: 3em;


`;

const SelectButton = styled(Button)`
margin-right: 1em;
width: 10em;

`;

export default function Toolbar (props) {
 return (
  <Wrapper>
      <SelectButton id="calculatorButton" onClick={props.handleShowCalculator}>Calculate</SelectButton>
      <SelectButton id="adderButton" onClick={props.handleShowAdder}>Add Recipe</SelectButton>
      <SelectButton id="databaseButton" onClick={props.handleShowDatabase}>Food Database</SelectButton>

    </Wrapper>
 )
}