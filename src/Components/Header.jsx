import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar,NavDropdown,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-tertiary nav-header">
  <Container>
    <Navbar.Brand className='navbar-brand-title'>WIRED</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto align">
        <Nav.Link as={Link} to={'/home'} className={`navbar-link-text`} activeClassname={'active'}>Home</Nav.Link>
        <Nav.Link as={Link} to={'/allMovies'} className='navbar-link-text'>Movies</Nav.Link>
        <NavDropdown title={<span className='navbar-link-text'>Your List </span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={'/lists/watchList'}>Your WatchList</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/lists/favList'}>
                Your Favourites List
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/lists/watchedList'}>
                Watched Movies
              </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Form inline>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            </Col>
            <Col xs="auto">
              <Button>Login</Button>
            </Col>
          </Row>
        </Form>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  
  )
}

export default Header