import { Component } from 'react'
import { Card } from 'react-bootstrap'


class Cards extends Component {
  render(){
    return(
      <Card>
        <Card.Body>
          <Card.Title>Jotaro Kujo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Cards
