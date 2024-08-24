import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styling/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navData } from '../configurations/NavData';

/* Navbar function: Creates a Navbar and handles dark mode and animation toggles */
export const Navigation = ({ mode, toggleMode }) => {
  /* Code modified from Stack Overflow due to errors with ScrollRestoration function in createBrowserRouter: https://stackoverflow.com/questions/33188994/scroll-to-the-top-of-the-page-after-render-in-react-js */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  /* ChatGPT suggested defining newEnabled to help resolve state conflict issues in toggleAnimations code, rest of code is mine */
  const toggleAnimations = () => {
      setAnimationsEnabled((prevEnabled) => {
          const newEnabled = !prevEnabled;
          document.body.classList.toggle('animations-disabled', !newEnabled);
          return newEnabled;
      });
  };

  return (
        <Navbar collapseOnSelect expand="md" className='navbar px-5'>
          {/*
            <Navbar.Brand href="/">
              <Link to={"/"} className="navbar-brand" onClick={scrollToTop}>
                Amogh Bharadwaj
              </Link>
            </Navbar.Brand>
            */}
            <Navbar.Brand as={Link} to='/' onClick={scrollToTop}>Amogh Bharadwaj</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" navbarScroll>
                {navData.map((item, index) => (
                  <Nav.Link eventKey={index} key={index} as={Link} to={item.path} onClick={scrollToTop}>{item.name}</Nav.Link>
                ))}
                <NavDropdown title="Configuration" tabIndex={0}>
                  <NavDropdown.Item eventKey="1" onClick={() => toggleMode()} tabIndex={0}>
                    {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="2" onClick={toggleAnimations} tabIndex={0}>
                    {animationsEnabled ? 'Disable Animations' : 'Enable Animations'}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
}
