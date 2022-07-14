import PropTypes from 'prop-types';
import React from 'react'
import {Card,Button} from 'react-bootstrap'
export const Profile = (props) => {
    const handlename=(name)=>alert(`your name is ${props.name}`)
  return (
    <div>
<Card style={{ width: '18rem' }}>
      {props.children}
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
        <Card.Text>{props.prof}</Card.Text>
        <Card.Text>{props.age}</Card.Text>
        <Button onClick={handlename} variant="primary">click me</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
Profile.propTypes={age:PropTypes.number}
Profile.defaultProps={
    prof:'teacher'
}



export default Profile