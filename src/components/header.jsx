import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import AddAttendee from './addAttendee'


import AddTalk from './addTalk'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      speaker: '',
      talk: ''

    }

  }

  onSpeakerChange = e => {
    this.setState({ speaker: e.target.value })

  }

  onTalkChange = e => {
    this.setState({ talk: e.target.value })
  }

  onFirstNameChange = e => {
    this.setState({ firstName: e.target.value })



  }
  onLastNameChange = e => {
    this.setState({ lastName: e.target.value })


  }
  render() {


    return (
      <nav className="navigation">
        <Navbar>
          <Navbar.Brand href="#home">
            <h1 className="logo">MyLawConfrence </h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                +
  </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item  ><AddTalk speaker={this.onSpeakerChange} talk={this.onTalkChange} /></Dropdown.Item>
                <Dropdown.Item ><AddAttendee lastName={this.onLastNameChange} firstName={this.onFirstNameChange} /></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

          </Navbar.Collapse>
        </Navbar>







      </nav>
    )
  }
}

export default Header
