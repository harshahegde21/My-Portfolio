import React from "react";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";

const Navbars = ({ isDark, setisDark }) => {
  return (
    <div className="md:fixed w-full hover:bg-blue-600 ">
      <Navbar
        bg="transparent"
        expand="lg"
        className={`shadow-lg border-bottom border-light ${
          isDark ? "border-light" : "border-black"
        }`}
      >
        <Container>
          <Navbar.Brand
            className={`text-light font-bold ${
              isDark ? "text-white" : "text-black"
            } `}
          >
            Harsha Portfolio
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              filter: isDark
                ? "invert(1) brightness(100%)"
                : "invert(0) brightness(100%)",
            }}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={`text-light mr-10 hover:text-blue-400 ${
                  isDark ? "text-white" : "text-black"
                } `}
              >
                <b>Home</b>
              </Nav.Link>

              <Nav.Link
                href="#experience"
                className={`text-light mr-10 bg-amber-600 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                <b>Experience</b>
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={`text-light mr-10 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                <b>Skills</b>
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`text-light mr-10 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                <b>Projects</b>
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={`text-light mr-10 ${
                  isDark ? "text-white" : "text-black"
                } `}
              >
                <b>Contact</b>
              </Nav.Link>
              <div className="flex items-center ml-4">
                <button
                  onClick={() => setisDark(!isDark)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    isDark ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      isDark ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-2 text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                  {isDark ? '🌙' : '☀️'}
                </span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
