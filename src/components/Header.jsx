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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projetos</Nav.Link>
          <Nav.Link href="#about">Sobre mim</Nav.Link>
        </Nav>
        <Nav>
        <NavDropdown title="Contato" id="collasible-nav-dropdown">
            <NavDropdown.Item>
            <a href="https://github.com/VSSSP" target="_blank" className="link">GitHub</a>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <a href="https://www.linkedin.com/in/victorssspaula/" target="_blank" className="link">LinkedIn</a>	
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>E-mail: victorssspaula@live.com</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
