import React, { useEffect, useState , Component } from "react";
import { Container , Row , Col , Jumbotron, Button, Modal} from 'react-bootstrap'
import './Home.css'




function Home() {

    let [show, setShow] = useState(0)
    const setOpen = () => setShow(1)
    const setClose = () => setShow(0)

    return(
      <div>
      <Modal show={show} onHide={setClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={setClose}>Close</Button>
            <Button variant="primary" onClick={setClose}>Save changes</Button>
          </Modal.Footer>
      </Modal>



      <Jumbotron>
        <h1>Hello, man!</h1>
          <p>
            This is a simple web-app.
          </p>
          <p>
          <Button variant="primary" onClick={setOpen}>Learn more</Button>
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
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Home;
