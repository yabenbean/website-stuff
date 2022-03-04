import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import 'zingchart/es6'
// import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import ZingChart from 'zingchart-react'


import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import AirQualityGauge from "./graphs/airqualitygauge.component.jsx";
// import Pmtwo from "./graphs/Pmtwo.component.jsx";
// import PmtenGauge from "./graphs/PmtenGauge.component.jsx";
import AirQualityLineChart from "./graphs/airqualitylinechart.component.jsx";

import "./dashboard.css"

export default class Dashboard extends Component {

  didAirQualityLoad = false;
  constructor(props) {
    super(props);
    this.PostcodeAQ ="https://api.weatherbit.io/v2.0/current?postal_code=";
    this.CityAQ= "https://api.weatherbit.io/v2.0/current/airquality?city=";
    this.openAQ="http://api.openweathermap.org/data/2.5/air_pollution?"
      this.key = "228cdead8acb4e5d994331522e25f011";
      this.key2 = '6e53e43c793da4d204db25502e48c33e'; //open weather key
      this.state = {
        postalCode: "90006",
        cityName: null,
        lat: null,
        long: null,
        aqiCode:null,
        pm25:null,
        pm10:null,
        o3:null,
        no2:null,

      };
    }

    retrieveDataFromPostal(postalCode) {
      const { setAirQuality } = this.props;
    
     
      fetch(this.PostcodeAQ + this.state.postalCode + "&key=" + this.key)
        .then((response) => response.json())
        .then((data) => {
          this.didAirQualityLoad = true;
          
     
          this.setState({
            cityName: data.data[0].city_name,
            aqiCode: data.data[0].aqi,
            lat: data.data[0].lat,
            long: data.data[0].lon,
          });
          this.retrieveLanLon(this.lat,this.long)
        });
  
     
    }
    retrieveLanLon(lat,lon){

      //http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
      fetch(this.openAQ+"lat="+this.state.lat+"&lon="+this.state.long+ "&appid=" + this.key2)
        .then((response) => response.json())
        .then((data) => {
      
          
     
          this.setState({
            
           pm25:data.list[0].components.pm2_5,
           pm10:data.list[0].components.pm10,
           o3:data.list[0].components.o3,
           no2:data.list[0].components.no2,
          });
          
        });
      

    }
    retrieveDataFromCity(cityName){
      const { setAirQuality } = this.props;
   
  
      fetch(this.CityAQ + this.state.postalCode + "&country=US" + "&key=" + this.key)
      .then((response) => response.json())
      .then((data) => {
        this.didAirQualityLoad = true;
        this.setState({
          cityName: data.data[0].city_name,
          stateCode: data.data[0].state_code,
          aqiCode: data.data[0].aqi,
          pmtwo: data.data[0].aqi,
        });
      });
  
     
    }
    componentDidMount() {
      this.retrieveDataFromPostal();
    }
  
    handleSubmit = (event) => {
        event.preventDefault();
    
        let parsed = parseInt(this.state.postalCode);
    
        if (isNaN(parsed)){
          this.retrieveDataFromCity(this.state.postalCode);
        }else{
          try {
            this.retrieveDataFromPostal(this.state.postalCode);
          } catch (e) {
            alert("Not a valid zipcode");
            
          }
        }
        
        this.setState({ postalCode: ""});
      };
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };
    

    render() {

      var gaugeaqi = {
        "type": "gauge",
        "scale-r": {
          "aperture": 200,
          "values": "0:500:50",
          center: {
            visible: false
          },
        
          "ring": {
            "size": 10,
            "rules": [{
                "rule": "%v >= 0 && %v <= 50",
                "background-color": "green"
                
              },
              {
                "rule": "%v >= 50 && %v <= 100",
                "background-color": "yellow"
              },
              {
                "rule": "%v >= 100 && %v <= 150",
                "background-color": "orange"
              },
              {
                "rule": "%v >= 150 && %v <= 200",
                "background-color": "red"
              },
              {
                "rule": "%v >= 200 && %v <=300",
                "background-color": "purple"
              },
              {
                "rule": "%v >= 300 && %v <=500",
                "background-color": "maroon"
              }
            ]
          }
        }
      ,
      plot: {
        size: '100%',
        valueBox: {
          placement: 'center',
          text: '%v', //default
          fontSize: 20,
          rules: [{
              rule: '%v <= 50 && %v > 0',
              text: '%v<br>Good<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <=100 && %v > 50',
              text: '%v<br>Moderate<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 150 && %v > 101 ',
              text: '%v<br>Unhealthy for at risk groups<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 200 && %v > 151 ',
              text: '%v<br>Unhealthy<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 300 && %v > 201 ',
              text: '%v<br>Very Unhealthy<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 500 && %v > 301 ',
              text: '%v<br>Hazardous<br>'+this.state.cityName+ ''
            },
          ]
        }
      },
        "series": [{
          "values": [this.state.aqiCode],
          backgroundColor: 'black',
          "indicator": [10,0,0,0,0.5]
        }]
      }

      var gauge25 = {
        "type": "gauge",
        "scale-r": {
          "aperture": 200,
          "values": "0:500:10",
          center: {
            visible: false
          },
        
          "ring": {
            "size": 10,
            "rules": [{
                "rule": "%v >= 0 && %v <= 12",
                "background-color": "green"
                
              },
              {
                "rule": "%v >= 13 && %v <= 35",
                "background-color": "yellow"
              },
              {
                "rule": "%v >= 36 && %v <= 55",
                "background-color": "orange"
              },
              {
                "rule": "%v >= 56 && %v <= 150",
                "background-color": "red"
              },
              {
                "rule": "%v >= 151 && %v <=250",
                "background-color": "purple"
              },
              {
                "rule": "%v >= 251 && %v <=500",
                "background-color": "maroon"
              }
            ]
          }
        }
      ,
      plot: {
        size: '100%',
        valueBox: {
          placement: 'center',
          text: '%v', //default
          fontSize: 20,
          rules: [{
              rule: '%v <= 12 && %v >= 0',
              text: '%v (ug/m3) <br>Good<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <=35 && %v > 13',
              text: '%v (ug/m3) <br>Moderate<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 55 && %v > 36 ',
              text: '%v (ug/m3) <br>Unhealthy for at risk groups<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 150 && %v > 56 ',
              text: '%v(ug/m3) <br>Unhealthy<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 250 && %v > 151 ',
              text: '%v (ug/m3)<br>Very Unhealthy<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v <= 500 && %v > 250 ',
              text: '%v (ug/m3)<br>Hazardous<br>'+this.state.cityName+ ''
            },
          ]
        }
      },
        "series": [{
          "values": [this.state.pm25],
          backgroundColor: 'black',
          "indicator": [10,0,0,0,0.5]
        }]
      }
            
      var gauge10 = {
        "type": "gauge",
        "scale-r": {
          "aperture": 200,
          "values": "0:600:10",
          center: {
            visible: false
          },
        
          "ring": {
            "size": 10,
            "rules": [{
                "rule": "%v >= 0 && %v <= 54",
                "background-color": "green"
                
              },
              {
                "rule": "%v >= 55 && %v <= 154",
                "background-color": "yellow"
              },
              {
                "rule": "%v >=155  && %v <= 254",
                "background-color": "orange"
              },
              {
                "rule": "%v >= 255 && %v <=354",
                "background-color": "red"
              },
              {
                "rule": "%v >= 355 && %v <=424",
                "background-color": "purple"
              },
              {
                "rule": "%v >= 425 && %v <=600",
                "background-color": "maroon"
              }
            ]
          }
        }
      ,
      plot: {
        size: '100%',
        valueBox: {
          placement: 'center',
          text: '%v', //default
          fontSize: 20,
          rules: [{
              rule: '%v >= 0 && %v <= 54',
              text: '%v (ug/m3) <br>Good<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 55 && %v <= 154',
              text: '%v (ug/m3) <br>Moderate<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >=155  && %v <= 254',
              text: '%v (ug/m3) <br>Unsafe for Some Groups<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 255 && %v <=354 ',
              text: '%v(ug/m3) <br>Unhealthy<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 355 && %v <=424',
              text: '%v (ug/m3)<br>Very Unhealthy <br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 425 && %v <=600',
              text: '%v (ug/m3)<br>Hazardous <br>'+this.state.cityName+ ''
            },
          ]
        }
      },
        "series": [{
          "values": [this.state.pm10],
          backgroundColor: 'black',
          "indicator": [10,0,0,0,0.5]
        }]
      }









      var gaugeO3 = {
        "type": "gauge",
        "scale-r": {
          "aperture": 200,
          "values": "0:600:10",
          center: {
            visible: false
          },
        
          "ring": {
            "size": 10,
            "rules": [{
                "rule": "%v >= 0 && %v <= 60",
                "background-color": "green"
                
              },
              {
                "rule": "%v >= 61 && %v <= 120",
                "background-color": "yellow"
              },
              {
                "rule": "%v >=121  && %v <= 180",
                "background-color": "orange"
              },
              {
                "rule": "%v >= 180 && %v <=240",
                "background-color": "#ff8c00"
              },
              {
                "rule": "%v >= 241 && %v <=600",
                "background-color": "red"
              },

            ]
          }
        }
      ,
      plot: {
        size: '100%',
        valueBox: {
          placement: 'center',
          text: '%v', //default
          fontSize: 20,
          rules: [{
              rule: '%v >= 0 && %v <= 60',
              text: '%v (ug/m3) <br>Good<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 61 && %v <= 120',
              text: '%v (ug/m3) <br>Moderate<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >=121  && %v <= 180',
              text: '%v (ug/m3) <br>Unsafe for Some Groups<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 181 && %v <=240 ',
              text: '%v(ug/m3) <br>Unhealthy<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 241 && %v <=600',
              text: '%v (ug/m3)<br>Very Unhealthy <br>'+this.state.cityName+ ''
            },
          ]
        }
      },
        "series": [{
          "values": [this.state.o3],
          backgroundColor: 'black',
          "indicator": [10,0,0,0,0.5]
        }]
      }

      var gaugeNO2 = {
        "type": "gauge",
        "scale-r": {
          "aperture": 200,
          "values": "0:600:10",
          center: {
            visible: false
          },
        
          "ring": {
            "size": 10,
            "rules": [{
                "rule": "%v >= 0 && %v <= 50",
                "background-color": "green"
                
              },
              {
                "rule": "%v >= 51 && %v <= 100",
                "background-color": "yellow"
              },
              {
                "rule": "%v >=101  && %v <= 200",
                "background-color": "orange"
              },
              {
                "rule": "%v >= 201 && %v <=400",
                "background-color": "#ff8c00"
              },
              {
                "rule": "%v >= 401 && %v <=600",
                "background-color": "red"
              },

            ]
          }
        }
      ,
      plot: {
        size: '100%',
        valueBox: {
          placement: 'center',
          text: '%v', //default
          fontSize: 20,
          rules: [{
              rule: '%v >= 0 && %v <= 50',
              text: '%v (ug/m3) <br>Good<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 51 && %v <= 100',
              text: '%v (ug/m3) <br>Moderate<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >=101  && %v <= 200',
              text: '%v (ug/m3) <br>Unsafe for Some Groups<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 201 && %v <=400 ',
              text: '%v(ug/m3) <br>Unhealthy<br>'+this.state.cityName+ ''
            },
            {
              rule: '%v >= 401 && %v <=600',
              text: '%v (ug/m3)<br>Very Unhealthy <br>'+this.state.cityName+ ''
            },
          ]
        }
      },
        "series": [{
          "values": [this.state.no2],
          backgroundColor: 'black',
          "indicator": [10,0,0,0,0.5]
        }]
      }
        return (
          
          <div>
          <div className="pad">
          <Navbar fixed="top" variant="dark" expand="lg" className="center3 md-12 backgroundNav">
              <img src="/air.png" alt="air" width="100" height="100"/>
              <Navbar.Brand className="center3 textSize"><a>Predict What We Breathe</a></Navbar.Brand>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="center8">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/graphs">Graphs</Nav.Link>
          {/* <Nav.Link href="/hourly">Hourly</Nav.Link> */}
          <Nav.Link href="/airqualitymap">AirqualityMap</Nav.Link>
          <Nav.Link href="/MapForecast">ForecastMap</Nav.Link>
          
          
                </Nav>
              </Navbar.Collapse>
              <form onSubmit={this.handleSubmit}>
                <label className="form-label colorfont3 center5 padd ">LookUp Your City!</label>
                <input
                  className="center5 textboxSearch padd"
                  type="text"
                  placeholder="   Enter zipcode here..."
                  value={this.state.postalCode}
                  onChange={this.handleChange}
                  name="postalCode"
                  id="aq-lookup"
                />
              </form>
            
   
    </Navbar>
         
          </div>
                <div className='container pb-4 d-flex center1'>
                  <h1 className='center2 underline'>AIR QUALITY</h1>
                   <ZingChart data={gaugeaqi}/>
                   </div>
                  <br></br>
                   <div className='container pb-4 d-flex center1'>
                     <h1 class='center2 underline'>      PM 2.5</h1>
                       <ZingChart data={gauge25} /> 
                    </div>
                    <br></br>
                    <div className='container pb-4 d-flex center1'>
                        <h1 class='center2 underline'>     PM 10</h1>
                      <ZingChart data={gauge10} /> 
                </div>
                <br></br>
                <div className='container pb-4 d-flex center1'>
                        <h1 class='center2 underline'>     Ozone</h1>
                      <ZingChart data={gaugeO3} /> 
                </div>
                <br></br>
                <div className='container pb-4 d-flex center1'>
                        <h1 class='center2 underline'>     NO2</h1>
                      <ZingChart data={gaugeNO2} /> 
                </div>

            </div>
            
        );
        
    }
}