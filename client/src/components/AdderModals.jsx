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

const checkRecipe = (recipe, type) => {
    if (recipe.type === type) {
      return (<option value={recipe.name}>{recipe.name}</option>);
    }
};


class RecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{ name: 'null', type: 'null' }]
    }
  }

  componentDidMount() {
    this.setState({
      recipes: this.props.recipes
    })
  }

  render() {
    return (
      <Modal
        onHide={this.props.handleHide}
        show={this.props.show}
        onClose={this.props.handleHide}
        size="lg"
        centered="true"
        backdrop="static"
      >
        <ModalBody>
          <ModalHeader>Enter Recipe Information</ModalHeader>
          <br></br>
          <label>Recipe Title</label>
          <br></br>
          <InfoInput id="title" onChange={this.props.handleChange} defaultValue={this.props.title}></InfoInput>
          <br></br>
          <label>Servings</label>
          <br></br>
          <InfoInput id="servings" onChange={this.props.handleChange} /*defaultValue={props.nutrition.yield || ""} */></InfoInput>
          <br></br>
          <InputLabel>Type</InputLabel>
          <br></br>
          <DropdownMenu id="type">
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
          <InputLabel>Pairing</InputLabel>
          <br></br>
          <DropdownMenu id="pairing">
            {this.state.recipes.map((item) => checkRecipe(item, 'side'))}
          </DropdownMenu>
          <br></br>
          <br></br>
          <Button varient="primary">Submit</Button> {}
          <Button varient="danger" className="btn-danger" onClick={this.props.handleHide}>Cancel</Button>
          <br></br>
        </ModalBody>
      </Modal>

    )
  }
}
export default function RecipeModalOld(props) {
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
        <br></br>
        <label>Recipe Title</label>
        <br></br>
        <InfoInput id="title" onChange={props.handleChange} defaultValue={props.title}></InfoInput>
        <br></br>
        <label>Servings</label>
        <br></br>
        <InfoInput id="servings" onChange={props.handleChange} /*defaultValue={props.nutrition.yield || ""} */></InfoInput>
        <br></br>
        <InputLabel>Type</InputLabel>
        <br></br>
        <DropdownMenu id="type">
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
        <InputLabel>Pairing</InputLabel>
        <br></br>
        <DropdownMenu id="pairing">
          {props.recipes.map((item) => checkRecipe(item, 'side'))}
        </DropdownMenu>
        <br></br>
        <br></br>
        <Button varient="primary">Submit</Button> {}

        <Button varient="danger" className="btn-danger" onClick={props.handleHide}>Cancel</Button>
        <br></br>
      </ModalBody>
    </Modal>
  )
}