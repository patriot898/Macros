import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AdderModal(props) {
  return (
    <Modal show={props.showAdderModal} onHide={props.handleAdderModalHide}>
      <h3>Enter Recipe Details</h3>
      <button>Click Me</button>

    </Modal>

  )
}