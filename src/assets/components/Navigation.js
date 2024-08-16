import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styling/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navigation = ({ navData, toggleMode }) => {
    const [animationsEnabled, setAnimationsEnabled] = useState(true);

    const toggleAnimations = () => {
      setAnimationsEnabled((prevEnabled) => {
          const newEnabled = !prevEnabled;
          document.body.classList.toggle('animations-disabled', !newEnabled);
          return newEnabled;
      });
  };

    return (
        <Navbar expand="md" bg="dark" variant="dark" className='navbar px-5'>
            <Navbar.Brand href="/">
              <Link to={"/"} className="navbar-brand">
                Amogh Bharadwaj
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                {navData.map((item, index) => (
                  <Nav.Link key={index}>
                    <Link to={item.path}>
                      {item.name}
                    </Link>
                  </Nav.Link>
                ))}
                <NavDropdown title="Configuration" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => toggleMode()} tabIndex={0}>
                    Dark Mode
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={toggleAnimations} tabIndex={1}>
                    {animationsEnabled ? 'Disable Animations' : 'Enable Animations'}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}