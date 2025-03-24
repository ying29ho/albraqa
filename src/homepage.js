import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./homepage.css";

function Homepage() {
  return (
    <Navbar className="custom-navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="albraqa_logo.svg"
            width="45"
            // className="d-inline-block align-text-top"
            alt="Al-Braqa Logo"
          />

          <img
            src="albraqa_logo1.svg"
            width="150"
            // className="d-inline-block align-text-top"
            alt="Al-Braqa Logo"
          />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="#about">ABOUT US</Nav.Link>
          <Nav.Link href="#services">SERVICES</Nav.Link>
          <Nav.Link href="#vessel">VESSEL</Nav.Link>
          <Nav.Link href="#affiliation">AFFILIATION</Nav.Link>
          <Nav.Link href="#contact">CONTACT US</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Homepage;
