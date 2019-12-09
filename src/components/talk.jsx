import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import TalkItem from './talk-item'

class Talk extends React.Component {
  
  addAttendeeToTalk = async (e) => {
    const { attendee } = this.state.talks;
    if (attendee) {

      await fetch('https://mylaw-staging.herokuapp.com/talks', {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attendee
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
    } else {
      alert("Please fill all fields");
    }
  };

  deleteTalk = async (e) => {
    const { talks } = this.state;
    if (talks.attendee) {
      await fetch('https://mylaw-staging.herokuapp.com/talks/', {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // talks
        })
      })
        .then(response => response.json())
        .then(
          response =>
            response.status === "success" ?
              (alert('Talk Removed Successfully'),
                setTimeout(() => {
                  window.location.reload(true);
                }, 3000))
              : alert('Error Removing Talk'))
    } else {
      alert("Please fill all fields");
    }
  };

  render() {
    

    return (
      <Card style={{ width: 'auto', textAlign: "center", margin: '0 auto' }}>
        <ListGroup variant="flush">
          {
            this.props.talk.map(({id, ...props}) =>(

            <TalkItem key={id} {...props}/>
            )

            )
          }
        </ListGroup>
      </Card>
    )
  }
}

export default Talk
