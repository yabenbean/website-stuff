import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';


import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import AirQualityGauge from "./graphs/airqualitygauge.component.jsx";
import Pmtwo from "./graphs/Pmtwo.component.jsx";
import PmtenGauge from "./graphs/PmtenGauge.component.jsx";
import AirQualityLineChart from "./graphs/airqualitylinechart.component.jsx";
import EmissionsLinechart from "./graphs/emissionlinechart.component.jsx";
import OpenWeatherMapHistorical from './graphs/historical/openweathermap-historical.component.jsx';
import BroadwayHistorical from './graphs/historical/broadway-historical.component.jsx';
import MemorialColiseumHistorical from './graphs/historical/memorialcoliseum-historical.component'
import OpenWeatherMapLive from './graphs/live/openweathermap-live.component.jsx';
import BroadwayLive from './graphs/live/broadway-live.component.jsx';
import MemorialColiseumLive from './graphs/live/memorialcoliseum-live.component.jsx';
import BarChart from "./graphs/barchart.component.jsx";
import LincolnHeightsLive from './graphs/live/lincolnheights-live.component.jsx';
import LincolnHeightsHistorical from './graphs/historical/lincolnheights-historical.component.jsx';
import MagnoliaLive from './graphs/live/magnolia-live.component.jsx';
import MagnoliaHistorical from './graphs/historical/magnolia-historical.component.jsx';
import "./dashboard.css"

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 'General'
        }
    }

    changeKey(newKey) {
        this.setState({key: newKey})
    }

    render() {

        return (
            <div>
                <Navbar variant="dark" expand="lg" className="center3 backgroundNav">
            <img src="/air.png" alt="air" width="100" height="100"/>
            <Navbar.Brand className="center3 textSize"><a>Predict What We Breathe</a></Navbar.Brand>
  <Container>
  <form onSubmit={this.handleSubmit}>
              <label className="form-label colorfont3 center5">Find Your City!</label>
              <input
                className="center2 textboxSearch"
                type="text"
                placeholder="                     Enter zipcode or city name here..."
                value={this.state.postalCode}
                onChange={this.handleChange}
                name="postalCode"
                id="aq-lookup"
              />
            </form>

            

            {/* <div className="colorfont3 mt-3 p-5">
              
             
             
              
            </div> */}
            
  </Container>
  </Navbar>
        <Navbar variant="dark" expand="lg" className="backgroundNav2">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="center textSize">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/graphs">Graphs</Nav.Link>
        {/* <Nav.Link href="/hourly">Hourly</Nav.Link> */}
        <Nav.Link href="/airqualitymap">Airquality Map</Nav.Link>
        <Nav.Link href="/MapForecast">Forecast Map</Nav.Link>
        
        {/* <NavDropdown title="Maps" id="basic-nav-dropdown">
        <NavDropdown.Item href="/airqualitymap">AIRQUALITY Map</NavDropdown.Item>
        <NavDropdown.Item href="/MapForecast">FORECAST MAP</NavDropdown.Item>
        <NavDropdown.Item href="/forecastVideo">FORECAST VIDEO</NavDropdown.Item>
        </NavDropdown> */}
                {/* <Nav.Link href="/insight">Insight</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
            
            <div class="container mt-3 background  ">
               
                <div class="center" class="title" className="col-12">
                    <Tabs defaultActiveKey={
                            this.state.key
                        }
                        activeKey={
                            this.state.key
                        }
                        onSelect={
                            (k) => this.changeKey(k)
                    }>
                        <Tab eventKey='AQI' title='Air Quality Index'><AirQualityGauge/></Tab>
                        <Tab eventKey='PM2.5' title='PM2.5'><Pmtwo/></Tab>
                        <Tab eventKey='pm10' title='PM10'><PmtenGauge/></Tab>
                        
                    </Tabs>
                </div>

                <br/>
                <br/>
                <br/>



                <div class="center "className="col-12">
                    <Tabs defaultActiveKey={
                            this.state.key
                        }
                        activeKey={
                            this.state.key
                        }
                        onSelect={
                            (k) => this.changeKey(k)
                    }>
                
                        <Tab eventKey='General' ><AirQualityGauge/></Tab>
                        

                    </Tabs>
                </div>
                <br/>
                <br/>
                <br/>


                <div class="center " className="col-12">
                <AirQualityLineChart/>
                </div>
                <br/>
                <br/>

            </div>
            </div>
        );
    }
}
