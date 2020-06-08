import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AdderModal(props) {
  return (
    <Modal show={props.showAdderModal}>
      <h3>Enter Recipe Details</h3>
      <button onClick={props.handleHide}>Click Me</button>

    </Modal>

  )
}