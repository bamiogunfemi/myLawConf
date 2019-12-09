import React,{useState} from "react";

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'



const AddTalk=({speaker,talk})=> {
  const onSubmit = async (e) => {
    console.log('submitted')
    await fetch('https://mylaw-staging.herokuapp.com/talks', {
      method: "update",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        
        talk
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
        Add Talk
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Talk and Speaker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={onSubmit}>
          <input type="text" 
          placeholder='Talk'
          required
          onChange={talk} 
          className="form-control"
          /> <br/>
          <input type="text" 
           placeholder='Speaker'
          className="form-control"
          onChange={speaker} 
          required/>
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

export default AddTalk
