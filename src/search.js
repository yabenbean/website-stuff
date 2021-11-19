import React from "react";
import { connect } from "react-redux";
import { setAirQuality } from "./redux/actions/spinner.actions";
// import "./airquality.style.scss";

class Search extends React.Component {
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
      <div className="air-quality container w-100">
        <div className="row pt-4 pb-4">
          <div className="col-lg-4 pb-4 d-flex justify-content-center align-items-center">
            <h1 id="aq-title">
              {this.state.cityName}
              <br />
              AIR QUALITY
            </h1>
          </div>
          <div className="col-lg-8 pb-4">
            <form onSubmit={this.handleSubmit}>
              <label className="form-label">Find Your City!</label>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter zipcode or city name here..."
                value={this.state.postalCode}
                onChange={this.handleChange}
                name="postalCode"
                id="aq-lookup"
              />
            </form>



            
            <div className="aq-details mt-3">
              <h2>Current Air Quality</h2>
              <div className="aq-d-location">
                <strong>
                  Location: {this.state.cityName}, {this.state.stateCode}
                </strong>
              </div>
              <div className="aq-d-aqi">
                Air Quality Index: {this.state.aqiCode}
              </div>
              <div className="weather-search-results">
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

        <div className="row pt-4 pb-4">
          <table className="table border">
            <thead className="table-header">
              <tr>
                <th colSpan="3">AQI Basics (AirNow)</th>
              </tr>
            </thead>
            <thead className="table-header border">
              <tr>
                <th className="border">Levels of Concern</th>
                <th className="border">Values of Index</th>
                <th className="border">Description of Air Quality</th>
              </tr>
            </thead>
            <tbody>
              <tr className="good">
                <td className="border">Good</td>
                <td className="border">0 to 50</td>
                <td className="border">
                  Air quality is satisfactory, and air pollution poses little or
                  no risk.
                </td>
              </tr>
              <tr className="moderate">
                <td className="border">Moderate</td>
                <td className="border">51 to 100</td>
                <td className="border">
                  Air quality is acceptable. However, there may be a risk for
                  some people, particularly those who are unusually sensitive to
                  air pollution
                </td>
              </tr>
              <tr className="above usg">
                <td className="border">Unhealthy for Sensitive Groups</td>
                <td className="border">101 to 150</td>
                <td className="border">
                  Members of Sensitive Groups may experience health effects. The
                  general public is less likely to be affected.
                </td>
              </tr>
              <tr className="above unhealthy">
                <td className="border">Unhealthy</td>
                <td className="border">151 to 200</td>
                <td className="border">
                  Some members of the general public may experience health
                  effects; members of sensitive groups may experience more
                  serious health effects.
                </td>
              </tr>
              <tr className="above vunhealthy">
                <td className="border">Very Unhealthy</td>
                <td className="border">201 to 300</td>
                <td className="border">
                  Health alert: The risk of health effects is increased for
                  everyone.
                </td>
              </tr>
              <tr className="above hazard">
                <td className="border">Hazardous</td>
                <td className="border">301 and higher</td>
                <td className="border">
                  Health warning of emergency conditions: everyone is likely to
                  be affected.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAirQuality: (didLoad) => dispatch(setAirQuality(didLoad)),
});

export default connect(null, mapDispatchToProps)(Search);
