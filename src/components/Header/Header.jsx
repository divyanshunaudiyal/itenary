// import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h2 className="text-center">LOGO</h2>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto row text-center">
            <Nav.Item className=" mt-2 col-6 col-sm-3">
              <Link className="nav-link" to="/">
                Tentative Itinerary
              </Link>
            </Nav.Item>
            <Nav.Item className=" mt-2 col-6 col-sm-3">
              <Link className="nav-link" to="detaileditinerary">
                Detailed Itinerary
              </Link>
            </Nav.Item>
            <Nav.Item className=" mt-2 col-6 col-sm-3">
              <Link className="nav-link" to="visa">
                Visa Information
              </Link>
            </Nav.Item>
            <Nav.Item className=" mt-2 col-6 col-sm-3">
              <Link className="nav-link" to="location">
                Location Info
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
