import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavLink,
} from "react-bootstrap";

const Navbars = ({isDark,setisDark}) => {
  return (

    <div className="md:fixed w-full hover:bg-blue-600 ">
      <Navbar bg="transparent" expand="lg" className={`shadow-lg border-bottom border-light ${isDark?"border-light":"border-black"}`}>
        <Container >
          <Navbar.Brand className={`text-light font-bold ${isDark?"text-white":"text-black"} `}>Harsha Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{filter: isDark ? "invert(1) brightness(100%)" : "invert(0) brightness(100%)",}}/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={`text-light mr-10 hover:text-blue-400 ${isDark?"text-white":"text-black"} `}><b>Home</b></Nav.Link>
              <Nav.Link href="#skills" className={`text-light mr-10 ${isDark?"text-white":"text-black"}`}><b>Skills</b></Nav.Link>
              <Nav.Link href="#projects" className={`text-light mr-10 ${isDark?"text-white":"text-black"}`}><b>Projects</b></Nav.Link>
              <Nav.Link href="#contact" className={`text-light mr-10 ${isDark?"text-white":"text-black"} `}><b>Contact</b></Nav.Link>
              <Nav className={`text-white border-1 border-blue-200 h-6 w-10 sm:mt-2 bg-amber-50 rounded-xl cursor-pointer ${isDark?"border-blue-300":"border-black"}`}><img className="ml-1.5 h-5 w-5" src={`${isDark?"lightmode.png":"darkmode.png"}`} alt="darkmode" onClick={()=>setisDark(!isDark)} /></Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;