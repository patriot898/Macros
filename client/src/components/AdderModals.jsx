import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import styled from 'styled-components';

const InfoInput = styled.input `
  width: 70%;
`;


export default function RecipeModal(props) {
  return (
    <Modal
    onHide={props.handleHide}
    show={props.show}
    onClose={props.handleHide}
    size="lg"
    centered="true"
    >
      <ModalBody>Here is the body</ModalBody>
      <label>Recipe Title</label><br></br>
      <InfoInput id="modalTitle" onChange={props.titleChange} defaultValue={props.title}></InfoInput>
      {/*add servings */}
      {/*add type */}
    </Modal>
  )
}