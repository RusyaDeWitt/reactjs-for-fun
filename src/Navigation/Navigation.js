import { Component } from 'react';
import { Navbar , Nav , NavDropdown , NavItem , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
      return(
        <div>
        <Navbar collapseOnSelect bg="light" expand="sm">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Table"> Table</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Cards"> Jojo Family</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Pokemons"> Pokemons</Link>
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
      )
    }
}

export default Navigation;
