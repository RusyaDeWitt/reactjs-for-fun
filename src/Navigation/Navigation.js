import { Component } from 'react';
import { Navbar , Nav , NavDropdown , NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
      return(
        <div>
        <Navbar bg="light" expand="lg">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/WelcomePage">WelcomePage</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Table"> Table</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Cards"> Cards</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Pokemons"> Pokemons</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        </div>
      )
    }
}

export default Navigation;
