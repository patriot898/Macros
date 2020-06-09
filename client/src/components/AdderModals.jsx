import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const InfoInput = styled.input`
  width: 70%;
`;

const DropdownMenu = styled.select`

`;

const InputLabel = styled.label`

`;

const MacroDiv = styled.div `

`;


const checkRecipe = (recipe, type) => {
    if (recipe.type === type) {
      return (<option value={recipe.name}>{recipe.name}</option>);
    }
};

const optionizeItem = (item, index) => {
  return (
    <option value={index.toString()}>{item.food.label}</option>
  )
}

export function RecipeModal(props) {
  return (
    <Modal
      onHide={props.handleHide}
      show={props.show}
      onClose={props.handleHide}
      size="lg"
      centered="true"
      backdrop="static"
    >
      <ModalBody>
        <ModalHeader>Enter Recipe Information</ModalHeader>
        <MacroDiv id="calories">Calories: {props.nutrition.calories} kCals</MacroDiv>
        <MacroDiv id="carbs">Carbs: {parseInt(props.nutrition.totalNutrients.CHOCDF.quantity)}g</MacroDiv>
        <MacroDiv id="protein">Protein: {parseInt(props.nutrition.totalNutrients.PROCNT.quantity)}g</MacroDiv>
        <MacroDiv id="fat">Fat: {parseInt(props.nutrition.totalNutrients.FAT.quantity)}g</MacroDiv>
        <br></br>
        <label>Recipe Title</label>
        <br></br>
        <InfoInput id="title" onChange={props.handleChange} defaultValue={props.title}></InfoInput>
        <br></br>
        <label>Servings</label>
        <br></br>
        <InfoInput id="servings" onChange={props.handleChange} defaultValue={props.nutrition.yield}></InfoInput>
        <br></br>
        <label>Default Servings per Meal</label>
        <br></br>
        <InfoInput id="defaultServing" onChange={props.handleChange} defaultValue="1"></InfoInput>
        <br></br>
        <InputLabel>Type</InputLabel>
        <br></br>
        <DropdownMenu id="type" onChange={props.handleChange} defaultValue="side"> {/*need to make it so main can be default in recipeadder and snack can be default in itemadder*/}
          <option value="main">Main</option>
          <option value="shake">Shake</option>
          <option value="snack">Snack</option>
          <option value="side">Side</option>
        </DropdownMenu>
        <br></br>
        <InputLabel>Meal</InputLabel>
        <br></br>
        <DropdownMenu id="meal" onChange={props.handleChange}>
          <option value="any">Any</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch-dinner">Lunch/Dinner</option>
        </DropdownMenu>
        <br></br>
        <InputLabel>Pairing</InputLabel>
        <br></br>
        <DropdownMenu id="pairing">
          <option value="none">None</option>
          {props.recipes.map((item) => checkRecipe(item, 'side'))}
        </DropdownMenu>
        <br></br>
        <br></br>
        <Button varient="primary" onClick={props.onSubmit}>Submit</Button> {}

        <Button varient="danger" className="btn-danger" onClick={props.handleHide}>Cancel</Button>
        <br></br>
      </ModalBody>
    </Modal>
  )
}

export function ItemModal(props) {
  return (
    <Modal
      onHide={props.handleHide}
      show={props.show}
      onClose={props.handleHide}
      size="lg"
      centered="true"
      backdrop="static"
    >
      <ModalBody>
        <ModalHeader>Enter Item Information</ModalHeader>

        <InputLabel>Group</InputLabel>
        <br></br>
        <DropdownMenu id="selectedFoodItem" onChange={props.handleItemChange}>
          {props.itemNutrition.hints.map((item, index) => optionizeItem(item, index))}
        </DropdownMenu>
        <br></br>
        <MacroDiv id="calories">Calories: {parseInt(props.selectedFoodItem.nutrients.ENERC_KCAL)} kCals</MacroDiv>
        <MacroDiv id="carbs">Carbs: {parseInt(props.selectedFoodItem.nutrients.CHOCDF)}g</MacroDiv>
        <MacroDiv id="protein">Protein: {parseInt(props.selectedFoodItem.nutrients.PROCNT)}g</MacroDiv>
        <MacroDiv id="fat">Fat: {parseInt(props.selectedFoodItem.nutrients.FAT)}g</MacroDiv>

        <br></br>
        <label>Item Title</label>
        <br></br>
        <InfoInput id="title" onChange={props.handleChange} defaultValue={props.title}></InfoInput>
        <br></br>
        <InputLabel>Type</InputLabel>
        <br></br>
        <DropdownMenu id="type" onChange={props.handleChange} defaultValue="side">
          <option value="main">Main</option>
          <option value="shake">Shake</option>
          <option value="snack">Snack</option>
          <option value="side">Side</option>
        </DropdownMenu>
        <br></br>
        <InputLabel>Meal</InputLabel>
        <br></br>
        <DropdownMenu id="meal">
          <option value="any">Any</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch-dinner">Lunch/Dinner</option>
        </DropdownMenu>
        <br></br>
        <InputLabel>Group</InputLabel>
        <br></br>
        <DropdownMenu id="group" onChange={props.handleChange}>
          <option value="none">None</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="dairy">Dairy</option>
          <option value="protein">Protein</option>
          <option value="grain">Grain</option>
        </DropdownMenu>
        <br></br>
        <br></br>
        <Button varient="primary" onClick={props.submitItem}>Submit</Button> {}

        <Button varient="danger" className="btn-danger" onClick={props.handleHide}>Cancel</Button>
        <br></br>
      </ModalBody>
    </Modal>
  )
}

