import * as React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import Map from "./Map";

class AirQualityMap extends React.Component {
  render() {
    return (
      <div>
        <div className="pad2">
        <Navbar fixed="top" variant="dark" expand="lg" className="center3 backgroundNav">
           <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="center textSize3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/graphs">Graphs</Nav.Link>
        {/* <Nav.Link href="/hourly">Hourly</Nav.Link> */}
        <Nav.Link href="/airqualitymap">Airquality Map</Nav.Link>
        <Nav.Link href="/MapForecast">Forecast Map</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
  </Navbar>
  </div>
       <Map/>
      </div>
    );
  }
}

export default AirQualityMap;
