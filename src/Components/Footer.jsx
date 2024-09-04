import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer bg-black  container-fluid'>
        <Container  >
        <Row className='justify-content-center '>
            <Col sm={3} className='mb-3'>
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><Link to={'/'} className="links">Careers</Link></li>
              <li><Link className="links">Blog</Link></li>
              <li><Link className="links">About IMDb</Link></li>
              <li><Link className="links">Investor Relations</Link></li>
              <li><Link className="links">IMDb Devices</Link></li>
            </ul>
            </Col>
            
            <Col sm={3} className='mb-3'>
                <h5>IMDb on the Web</h5>
                <ul className="list-unstyled">
                    <li><Link className="links">IMDb Mobile Site</Link></li>
                    <li><Link className="links">Press Room</Link></li>
                    <li><Link className="links">Advertising</Link></li>
                    <li><Link className="links">Help</Link></li>
                </ul>
            </Col>
            <Col sm={3} className='mb-3'>
                <h5>Follow Us</h5>
                <ul className="list-unstyled d-flex">
                    <li><Link className="links me-3">Facebook</Link></li>
                    <li><Link className="links me-3">Twitter</Link></li>
                    <li><Link className="links me-3">Instagram</Link></li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="text-center text-white mt-3">
                    © 2024 IMDb.com, Inc. or its affiliates
                </p>
            </Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer