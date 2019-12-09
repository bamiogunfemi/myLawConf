import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Talk from "./components/talk";

class App extends Component {
  constructor() {
    super();

    this.state = {
      talks: {
        talk: [],
        speaker: [],
        attendee: []
      },
      nameofAttendee: ""
    };
  }
  componentDidMount(){
   
    fetch(`https://mylaw-staging.herokuapp.com/talks`)
      .then(response => response.json())
      .then(
        response =>
          {this.setState({
            talk:response.data
          })}
      )
  }
  render() {
    return (
      <div className="App">
        <Header
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <Talk talk={this.state.talks.talk} />
      </div>
    );
  }
}

export default App;
