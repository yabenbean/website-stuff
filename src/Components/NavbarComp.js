import * as React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";

class NavbarComp extends React.Component {
  render() {
    return (
      <div>
         <Navbar variant="dark" expand="lg" className="center3 backgroundNav">
            <img src="/air.png" alt="air" width="100" height="100"/>
            <Navbar.Brand className="center3 textSize">AirPollution</Navbar.Brand>
  <Container>
    
    <Form className="center2">
        <FormControl
          type="search"
          placeholder="Zipcode"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  </Container>
  </Navbar>
        <Navbar variant="dark" expand="lg" className="backgroundNav2">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="center textSize">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/graphs">Graphs</Nav.Link>
        <Nav.Link href="#">Hourly</Nav.Link>
        <NavDropdown title="Maps" id="basic-nav-dropdown">
          <NavDropdown.Item href="/airqualitymap">AIRQUALITY Map</NavDropdown.Item>
          <NavDropdown.Item href="/MapForecast">FORECAST MAP</NavDropdown.Item>
          <NavDropdown.Item href="/forecastVideo">FORECAST VIDEO</NavDropdown.Item>
        </NavDropdown>
                {/* <Nav.Link href="/insight">Insight</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
