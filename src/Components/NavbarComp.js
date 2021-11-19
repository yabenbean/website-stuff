import * as React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { setAirQuality } from "../redux/actions/spinner.actions";
import ".././airquality.style.css";




class NavbarComp extends React.Component {
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
    // this.key = process.env.REACT_APP_WEATHERBIT_KEY;
    this.key = "44fff5c2698043ac8e8946d23fcf6197";
    this.state = {
      postalCode: "90012",
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

    setTimeout(() => {
      setAirQuality(this.didAirQualityLoad);
    }, 3000);
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

    setTimeout(() => {
      setAirQuality(this.didAirQualityLoad);
    }, 3000);
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

  render() {
    return (
      <div>
         <Navbar variant="dark" expand="lg" className="center3 backgroundNav">
            <img src="/air.png" alt="air" width="100" height="100"/>
            <Navbar.Brand className="center3 textSize">AirPollution</Navbar.Brand>
  <Container>
  <form onSubmit={this.handleSubmit}>
              <label className="form-label colorfont3">Find Your City!</label>
              <input
                className="center2"
                type="text"
                placeholder="Enter zipcode or city name here..."
                value={this.state.postalCode}
                onChange={this.handleChange}
                name="postalCode"
                id="aq-lookup"
              />
            </form>

            <div className="colorfont3 mt-3 p-5">
              
              <div className="aq-d-location">
                <h4>
                  Location: {this.state.cityName}, {this.state.stateCode}
                </h4>
              </div>
              <div className="aq-d-aqi textsize2 ">
                Todays Air Quality Index: {this.state.aqiCode}                 


              </div>
              <div className="weather-search-results">
                <div className="row" id="row">
                  <div className="col-md holder">
                  </div>
                </div>
              </div>
            </div>
            
  </Container>
  </Navbar>
        <Navbar variant="dark" expand="lg" className="backgroundNav2">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="center textSize">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/graphs">Graphs</Nav.Link>
        <Nav.Link href="/hourly">Hourly</Nav.Link>
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