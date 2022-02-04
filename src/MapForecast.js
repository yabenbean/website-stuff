import * as React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import ForecastMap from './ForecastMap.js'
import './map.style.css'

class MapForecast extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      id: 1, 
    };
  }


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
      <div className="map-row col-sm-12" >
        
        

        
        <div className="center5 col-sm-12">
        <ForecastMap id={1} />
        
        
          {/* <div
            className="content-layerlist size2 "
            id="layerlist1"
            ref={this.listRef}
            
          ></div> */}
        
        </div>
     
    </div>
    </div>

    );
  }
}

export default MapForecast;