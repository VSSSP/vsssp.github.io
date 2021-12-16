import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">VSSSP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#projects">Projetos</Nav.Link>
          <Nav.Link href="#nothing">Sobre mim</Nav.Link>
        </Nav>
        <Nav>
        <NavDropdown title="Contato" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
            <a href="https://github.com/VSSSP" className="link">GitHub</a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            <a href="https://www.linkedin.com/in/victorssspaula/" className="link">LinkedIn</a>	
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">E-mail</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
