import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

const TalkItem = ({ talks }) => (

  <ListGroup.Item style={{ disply: 'flex', width: '100%' }}>{talks.talk}
    <div className="" style={{ justifyItems: 'flex-end' }}>
      <Badge variant="secondary" onClick={this.addAttendeeToTalk}>+</Badge>
      <Badge variant="secondary" onClick={this.deleteTalk}>X</Badge>
    </div>
  </ListGroup.Item>
)

export default TalkItem;
