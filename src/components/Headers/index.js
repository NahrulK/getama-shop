import React from "react";
import "./style.css";
// import Logo from "../../assets/logo.png";
import { ButtonGroup, Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg" className="bg-dark text-warning">
        <Container>
          <Navbar.Brand
            href="#home"
            className="text-light font-weight-bold text-uppercase"
          >
            <Link to="/">
              <h1 className="text-decoration-none">Getama Shop</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar collapseOnSelect>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">
                  <Nav.Link href="/" className="text-light">
                    Home{" "}
                  </Nav.Link>
                </Link>

                <Nav.Link href="" className="text-light ">
                  Produk
                </Nav.Link>
                <ButtonGroup>
                  <Link to="/login">
                    <Button variant="success " className="text-decoration-none">
                      Sign in
                    </Button>
                  </Link>
                  <Link to="/registration">
                    <Button
                      variant="secondary"
                      className="text-decoration-none"
                    >
                      Register
                    </Button>
                  </Link>
                </ButtonGroup>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
