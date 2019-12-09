import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'


const CustomModal = props => {
 


  return (
    <>


      <Modal show={props.show} onHide={props.onHide} className="custom-modal" >
        {props.title && <Modal.Title>{props.title()}</Modal.Title>}
        {props.body && <Modal.Body>{props.body()}</Modal.Body>}
        {props.footer && <Modal.Footer>{props.footer()}</Modal.Footer>}
      </Modal>
    </>
  );
};
CustomModal.propTypes = {
  title: PropTypes.func.isRequired,
  body: PropTypes.func.isRequired,
  footer: PropTypes.func
};
export default CustomModal;
