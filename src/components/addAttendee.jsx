import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'



const AddAttendee = ({ firstName, lastName }) => {

  
  const onSubmit = async (e) => {
    console.log('submitted')
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/user/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName
      })
    })
      .then(response => response.json())
      .then(
        response =>
          response.status === "success" ?
            (alert('Added Successfully'),
              setTimeout(() => {
                window.location.reload(true);
              }, 3000))
            : alert('Error Adding'))

  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <>
      <Button variant="primary" onClick={handleShow}>
        Add Attendee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <input type="text"
              placeholder="First Name"
              className="form-control"
              required
              onChange={firstName} /> <br />
            <input type="text"
              className="form-control"
              placeholder='Last Name'
              required
              onChange={lastName} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddAttendee

