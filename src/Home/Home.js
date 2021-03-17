import { Component } from 'react'
import { Container , Row , Col , Jumbotron, Button, Modal} from 'react-bootstrap'

import './Home.css'




class Home extends  Component {
    constructor(props){
      super(props)
      this.state = {
          show: false,
      }
      this.handleShow = this.handleShow.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }


    handleShow(){
      this.setState({
        show: true
      })
    }

    handleClose(){
      this.setState({
        show: false
      })
    }

  render(){
    return(
      <div>

      <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="primary" onClick={this.handleClose}>Save changes</Button>
          </Modal.Footer>
      </Modal>



      <Jumbotron>
        <h1>Hello, man!</h1>
          <p>
            This is a simple web-app.
          </p>
          <p>
          <Button variant="primary" onClick={this.handleShow}>Learn more</Button>
          </p>
      </Jumbotron>

        <Container>
          <Row>
            <Col>
              <Row>

              </Row>
            </Col>
            <Col>
              <Row>
              </Row>
              <Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;
