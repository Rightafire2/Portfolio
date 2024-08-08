import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../styling/navbar.css';

export const Navigation = () => {
    return (
        <Navbar expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Amogh Bharadwaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">About Me</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <NavDropdown title="Configuration" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Dark Mode</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}