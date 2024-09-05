// import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";

function Header() {
  return (
    <>
      <h1 className="text-center text-white pt-3">Travel Genie</h1>
      <span className="text-grey text-white px-5">Hello Traveler,</span>
      <h3 className="text-dark text-white px-5">WHAT CAN I DO FOR YOU?</h3>
      <Navbar bg="transparent" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto row ">
            <Nav.Item className="mt-3 col-5 col-lg-3 ">
              <div className="d-flex flex-column align-items-normal  p-2">
                <FaComments className="mb-2 text-white" size={24} />

                <p className=" text-white mt-5 font-12">
                  <span className="thumbnail-heading lead lead-text">
                    Tentative Itinerary
                  </span>
                  <br /> to confirm your ideas.
                </p>

                <Link to="/" className="btn btn-light mt-2">
                  Let{"'"}s Plan
                </Link>
              </div>
            </Nav.Item>

            <Nav.Item className="mt-3 col-5 col-lg-3 ">
              <div className="d-flex flex-column align-items-normal  p-2">
                {/* Top: Chat Icon */}
                <FaComments className="mb-2 text-white" size={24} />

                {/* Center: Text Heading */}
                <p className=" text-white mt-5 font-12">
                  <span className="thumbnail-heading lead lead-text">
                    Detailed Itinerary
                  </span>
                  <br /> to confirm your ideas.
                </p>

                {/* Bottom: Let's Plan Button */}
                <Link to="detaileditenary" className="btn btn-light mt-2">
                  Let's Plan
                </Link>
              </div>
            </Nav.Item>

            <Nav.Item className="mt-3 col-12 col-lg-3 ">
              <div className="d-flex flex-column align-items-normal  p-2">
                {/* Top: Chat Icon */}
                <FaComments className="mb-2 text-white" size={24} />

                {/* Center: Text Heading */}
                <p className=" text-white mt-5 font-12">
                  <span className="thumbnail-heading lead lead-text">
                    Visa Information
                  </span>
                  <br /> to learn about visa requirements & process.
                </p>

                {/* Bottom: Let's Plan Button */}
                <Link to="visa" className="btn btn-light mt-2">
                  Let's Plan
                </Link>
              </div>
            </Nav.Item>

            <Nav.Item className="mt-3 col-12 col-lg-3 ">
              <div className="d-flex flex-column align-items-normal  p-2">
                {/* Top: Chat Icon */}
                <FaComments className="mb-2 text-white" size={24} />

                {/* Center: Text Heading */}
                <p className=" text-white mt-5 font-12">
                  <span className="thumbnail-heading lead lead-text">
                    Location Information
                  </span>
                  <br /> to know top places and things to do.
                </p>

                {/* Bottom: Let's Plan Button */}
                <Link to="location" className="btn btn-light mt-2">
                  Let's Plan
                </Link>
              </div>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
