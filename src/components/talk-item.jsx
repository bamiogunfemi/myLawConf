import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

const TalkItem =({talks})=>(

  <ListGroup.Item>{talks.talk} by {talks.speaker}  <Badge variant="secondary">{talks.attendee}</Badge>
  <Badge variant="secondary" onClick={this.addAttendeeToTalk}>+</Badge>
  <Badge variant="secondary" onClick={this.deleteTalk}>X</Badge> 
  </ListGroup.Item>
)

export default TalkItem;
