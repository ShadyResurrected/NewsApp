import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { LinkContainer } from "react-router-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>NewsApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/business">
                <Nav.Link href="/business">Business</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/entertainment">
                <Nav.Link href="/entertainment">Entertainment</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/health">
                <Nav.Link href="/health">Health</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/science">
                <Nav.Link href="/science">Science</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/sports">
                <Nav.Link href="/sports">Sports</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/technology">
                <Nav.Link href="/technology">Technology</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
