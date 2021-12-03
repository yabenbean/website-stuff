import React from "react";
import { Container } from "react-bootstrap";
// import { connect } from "react-redux";
import { setAirQuality } from "./redux/actions/spinner.actions";
import axios, { Axios } from 'axios';
import "./airquality.style.css";
import NavbarComp from "./Components/NavbarComp";

class Hourly extends React.Component {
  
  didAirQualityLoad = false;
  constructor(props) {
    super(props);
    this.PostcodeForecastUrl =
      "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=";
    this.CityForecastUrl = 
      "https://api.weatherbit.io/v2.0/forecast/daily?city="
    //this.AqiUrl = "https://api.weatherbit.io/v2.0/current/airquality?postal_code=";
    this.PostcodeAqiUrl = "https://api.weatherbit.io/v2.0/current?postal_code=";
    this.CityAqiUrl = "https://api.weatherbit.io/v2.0/current/?city="
    // this.widget = "https://widget.airnow.gov/aq-flag-widget/?a=today&z=90012&n=losAngeles"
    // this.key = process.env.REACT_APP_WEATHERBIT_KEY;
    this.key = "f872fbc28c5b46b089be2dfb0096166f";
    // this.key = "db5d97de2f5e423bb3dd7e130101a7dd";
    this.state = {
      postalCode: "90006",
      check: null,
      cityName: null,
      stateCode: null,
      aqiCode: null,
      weatherCode: null,
      weatherIcon: [null, null, null, null, null],
      weatherTemp: [null, null, null, null, null],
      weatherMinTemp: [null, null, null, null, null],
      weatherMaxTemp: [null, null, null, null, null],
      date: [null, null, null, null, null],
    };
  }

  retrieveDataFromPostal(postalCode) {
    const { setAirQuality } = this.props;
    fetch(
      this.PostcodeForecastUrl +
        this.state.postalCode +
        "&days=5&units=I&key=" +
        this.key
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          postalCode: "",
          //cityName: data.city_name,
          //stateCode: data.state_code,

          weatherTemp: [
            data.data[0].temp,
            data.data[1].temp,
            data.data[2].temp,
            data.data[3].temp,
            data.data[4].temp,
          ],
          weatherMinTemp: [
            data.data[0].min_temp,
            data.data[1].min_temp,
            data.data[2].min_temp,
            data.data[3].min_temp,
            data.data[4].min_temp,
          ],
          weatherMaxTemp: [
            data.data[0].max_temp,
            data.data[1].max_temp,
            data.data[2].max_temp,
            data.data[3].max_temp,
            data.data[4].max_temp,
          ],
          weatherIcon: [
            data.data[0].weather.icon,
            data.data[1].weather.icon,
            data.data[2].weather.icon,
            data.data[3].weather.icon,
            data.data[4].weather.icon,
          ],
          date: [
            data.data[0].datetime,
            data.data[1].datetime,
            data.data[2].datetime,
            data.data[3].datetime,
            data.data[4].datetime,
          ],
        });
      });

    fetch(this.PostcodeAqiUrl + this.state.postalCode + "&key=" + this.key)
      .then((response) => response.json())
      .then((data) => {
        this.didAirQualityLoad = true;
        this.setState({
          cityName: data.data[0].city_name,
          stateCode: data.data[0].state_code,
          aqiCode: data.data[0].aqi,
        });
      });

   
  }

  retrieveDataFromCity(cityName){
    const { setAirQuality } = this.props;
    fetch(
      this.CityForecastUrl +
        this.state.postalCode +
        "&country=US"+
        "&days=5&units=I&key=" +
        this.key
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          postalCode: "",
          //cityName: data.city_name,
          //stateCode: data.state_code,

          weatherTemp: [
            data.data[0].temp,
            data.data[1].temp,
            data.data[2].temp,
            data.data[3].temp,
            data.data[4].temp,
          ],
          weatherMinTemp: [
            data.data[0].min_temp,
            data.data[1].min_temp,
            data.data[2].min_temp,
            data.data[3].min_temp,
            data.data[4].min_temp,
          ],
          weatherMaxTemp: [
            data.data[0].max_temp,
            data.data[1].max_temp,
            data.data[2].max_temp,
            data.data[3].max_temp,
            data.data[4].max_temp,
          ],
          weatherIcon: [
            data.data[0].weather.icon,
            data.data[1].weather.icon,
            data.data[2].weather.icon,
            data.data[3].weather.icon,
            data.data[4].weather.icon,
          ],
          date: [
            data.data[0].datetime,
            data.data[1].datetime,
            data.data[2].datetime,
            data.data[3].datetime,
            data.data[4].datetime,
          ],
        });
      });

    fetch(this.CityAqiUrl + this.state.postalCode + "&country=US" + "&key=" + this.key)
      .then((response) => response.json())
      .then((data) => {
        this.didAirQualityLoad = true;
        this.setState({
          cityName: data.data[0].city_name,
          stateCode: data.data[0].state_code,
          aqiCode: data.data[0].aqi,
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
    
    this.setState({ postalCode: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount1() {
    axios({
      method: 'GET',
      url:"https://widget.airnow.gov/aq-dial-widget-primary-pollutant/?city="+this.state.cityName+"&state="+this.state.stateCode+"&country=USA&transparent=true"

    }).then((resp) => {
      this.setState({
        aqi: resp.data.data,
      });
    })
  }

  render() {
    
    const urlchange = "https://widget.airnow.gov/aq-dial-widget-primary-pollutant/?city="+this.state.cityName+"&state="+this.state.stateCode+"&country=USA&transparent=true"
    return (
      
      <div className="row pt-4 pb-4 air-quality container w-100">
       
        <div className="row pt-4 pb-4">
       
          <div className="col-lg-4 pb-4 d-flex justify-content-center align-items-center">
          
          <div className="gage">
                  <iframe title="Example 6" height="380" src= {urlchange}  width="600" ></iframe>
                </div>
          </div>
          <div className="weather-search-results ">
          <Container>
  <form onSubmit={this.handleSubmit}>
              <label className="form-label">Find Your City!</label>
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
            
  </Container>
          <div className="col-lg-8 pb-4">
          <h2> Location: {this.state.cityName}, {this.state.stateCode}</h2>
            <div className="aq-details mt-3">
              <h2>Current Air Quality</h2>
              <div className="aq-d-location">
               
              </div>
             











             
                <div className="row" id="row">
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[0]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[0] + ".png"
                      }
                      alt="weather-icon"
                    />

                    <div>Temp: {this.state.weatherTemp[0]}&#8457;</div>
                    <div>Min Temp: {this.state.weatherMinTemp[0]}&#8457;</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[0]}&#8457;</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[1]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[1] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[1]}&#8457;</div>
                    <div>Min Temp: {this.state.weatherMinTemp[1]}&#8457;</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[1]}&#8457;</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[2]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[2] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[2]}&#8457;</div>
                    <div>Min Temp: {this.state.weatherMinTemp[2]}&#8457;</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[2]}&#8457;</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[3]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[3] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[3]}&#8457;</div>
                    <div>Min Temp: {this.state.weatherMinTemp[3]}&#8457;</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[3]}&#8457;</div>
                  </div>
                  <div className="col-md holder">
                    <div>
                      <b> {this.state.date[4]}</b>
                    </div>
                    <img
                      id="aq-weather-icon"
                      src={
                        "/weather-icons/" + this.state.weatherIcon[4] + ".png"
                      }
                      alt="weather-icon"
                    />
                    <div>Temp:{this.state.weatherTemp[4]}&#8457;</div>
                    <div>Min Temp: {this.state.weatherMinTemp[4]}&#8457;</div>
                    <div>Max Temp: {this.state.weatherMaxTemp[4]}&#8457;</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
         

          
        </div>
      

        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAirQuality: (didLoad) => dispatch(setAirQuality(didLoad)),
});

export default Hourly;