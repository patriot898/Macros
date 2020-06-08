import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody"

export default function AdderModal(props) {
  return (
    <Modal
    onHide={props.handleHide}
    show={props.showAdderModal}
    onClose={props.handleHide}
    size="lg"
    centered="true"
    >
      <ModalBody>Here is the body</ModalBody>


    </Modal>

  )
}