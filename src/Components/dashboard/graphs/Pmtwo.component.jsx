import React, { Component } from 'react';
import 'zingchart/es6'
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import ZingChart from 'zingchart-react'
import axios, { Axios } from 'axios';

class Pmtwo extends Component{
  didAirQualityLoad = false;
  constructor(props) {
    super(props);
    this.PostcodeAQ ="https://api.weatherbit.io/v2.0/current/airquality?postal_code=";
    this.CityAQ= 
      "https://api.weatherbit.io/v2.0/current/airquality?city=";
      this.key = "5023eb593a7c49f5b6a6a9e5184b38df";
      this.state = {
        postalCode: "91732",
        cityName: null,
        aqi: null,
      };
    }

    retrieveDataFromPostal(postalCode) {
      const { setAirQuality } = this.props;
    
     
      fetch(this.PostcodeAQ + this.state.postalCode + "&key=" + this.key)
        .then((response) => response.json())
        .then((data) => {
          this.didAirQualityLoad = true;
          
     
          this.setState({
            cityName: data.city_name,
            aqi: data.data[0].pm25,
          });
        });
  
     
    }
    retrieveDataFromCity(cityName){
      const { setAirQuality } = this.props;
   
  
      fetch(this.CityAQ + this.state.cityName + "&key=" + this.key)
        .then((response) => response.json())
        .then((data) => {
          this.didAirQualityLoad = true;
          this.setState({
            cityName: data.city_name,
            aqi: data.data[0].pm25,
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
          this.retrieveDataFromCity(this.state.cityName);
        }else{
          try {
            this.retrieveDataFromPostal(this.state.postalCode);
          } catch (e) {
            alert("Not a valid zipcode");
            
          }
        }
        
        this.setState({ postalCode: "" });
      };
    
      handleChange = (event) => {
        const { name, value }  = event.target;
        this.setState({
          [name]: value,
        });
      };
  
   
  
  

    render(){
      
        var myConfig = {
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
              "values": [this.state.aqi],
              backgroundColor: 'black',
              "indicator": [10,0,0,0,0.5]
            }]
          }
          
              return <ZingChart data={myConfig} />
        }
    
        
        
    
    }
export default Pmtwo;