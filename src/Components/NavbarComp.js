import * as React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

class NavbarComp extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <img src="/air.png" alt="air" width="60" height="60" />
          <Container>
            <Navbar.Brand>AirPollution</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/forecast">Forecast</Nav.Link>
                <Nav.Link href="/graphs">Graphs</Nav.Link>
                <Nav.Link href="/insight">Insight</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
