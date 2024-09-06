// import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaComments } from "react-icons/fa";

function Header() {
  const location = useLocation(); // Get the current URL

  return (
    <>
      <h2 className="text-center text-white pt-3">Travel Genie</h2>
      <h6 className="text-secondary px-5 mx-md-5 mt-5">Hello Traveler,</h6>
      <h6 className="text-white px-5 mx-md-5">WHAT CAN I DO FOR YOU?</h6>
      <Navbar bg="transparent" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto row">
            {/* Show all links when the current path is '/' */}
            {location.pathname === "/" ? (
              <>
                <Link to="tentativeitenary" className="mt-3 col-5 col-lg-3">
                  <Nav.Item>
                    <div className="d-flex flex-column align-items-normal p-2">
                      <FaComments className="mb-2 text-white" size={24} />
                      <h3 className="thumbnail-heading text-white">
                        Tentative Travel Plan
                      </h3>
                      <h6 className="text-white">
                        to affirm your travel thoughts.
                      </h6>
                    </div>
                  </Nav.Item>
                </Link>
                <Link to="detaileditenary" className="mt-3 col-5 col-lg-3">
                  <Nav.Item>
                    <div className="d-flex flex-column align-items-normal p-2">
                      <FaComments className="mb-2 text-white" size={24} />
                      <h2 className="thumbnail-heading text-white">
                        Detailed Travel Plan
                      </h2>
                      <h6 className="text-white">
                        to get you started with budgeting.
                      </h6>
                    </div>
                  </Nav.Item>
                </Link>
                <Link to="location" className="mt-3 col-10 col-lg-3">
                  <Nav.Item>
                    <div className="d-flex flex-column align-items-normal p-2">
                      <FaComments className="mb-2 text-white" size={24} />
                      <h2 className="thumbnail-heading text-white">
                        Visa Information
                      </h2>
                      <h6 className="text-white">
                        to learn about visa requirements & process.
                      </h6>
                    </div>
                  </Nav.Item>
                </Link>
                <Link to="visa" className="mt-3 col-10 col-lg-3">
                  <Nav.Item>
                    <div className="d-flex flex-column align-items-normal p-2">
                      <FaComments className="mb-2 text-white" size={24} />
                      <h2 className="thumbnail-heading text-white">
                        Location Information
                      </h2>
                      <h6 className="text-white">
                        to know top places and things to do.
                      </h6>
                    </div>
                  </Nav.Item>
                </Link>
              </>
            ) : (
              // Render individual links for specific paths
              <>
                {location.pathname === "/tentativeitenary" && (
                  <Link to="tentativeitenary">
                    <Nav.Item className="col-12 mt-3 ">
                      <div className="d-flex flex-column align-items-normal p-2">
                        <FaComments className="mb-2 text-white" size={24} />
                        <h2 className="thumbnail-heading text-white">
                          Tentative Travel Plan
                        </h2>
                        <h6 className="text-white">
                          to affirm your travel thoughts.
                        </h6>
                      </div>
                    </Nav.Item>
                  </Link>
                )}

                {location.pathname === "/detaileditenary" && (
                  <Link to="detaileditenary">
                    <Nav.Item className="col-12 mt-3">
                      <div className="d-flex flex-column align-items-normal p-2">
                        <FaComments className="mb-2 text-white" size={24} />
                        <h2 className="thumbnail-heading text-white">
                          Detailed Travel Plan
                        </h2>
                        <h6 className="text-white">
                          to get you started with budgeting.
                        </h6>
                      </div>
                    </Nav.Item>
                  </Link>
                )}

                {location.pathname === "/location" && (
                  <Link to="location">
                    <Nav.Item className="col-12 mt-3">
                      <div className="d-flex flex-column align-items-normal p-2">
                        <FaComments className="mb-2 text-white" size={24} />
                        <h2 className="thumbnail-heading text-white">
                          Visa Information
                        </h2>
                        <h6 className="text-white">
                          to learn about visa requirements & process.
                        </h6>
                      </div>
                    </Nav.Item>
                  </Link>
                )}

                {location.pathname === "/visa" && (
                  <Link to="visa">
                    <Nav.Item className="col-12 mt-3">
                      <div className="d-flex flex-column align-items-normal p-2">
                        <FaComments className="mb-2 text-white" size={24} />
                        <h2 className="thumbnail-heading text-white">
                          Location Information
                        </h2>
                        <h6 className="text-white">
                          to know top places and things to do.
                        </h6>
                      </div>
                    </Nav.Item>
                  </Link>
                )}
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
