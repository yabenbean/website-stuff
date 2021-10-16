import * as React from "react";

import video from './video0.mp4'
import Map from "./Map";
import ForecastMap from "./ForecastMap";

class Forecast extends React.Component {
  render() {
    return (
      <div>
        <h1>Forecast</h1>
        <ForecastMap />
        <div>
        <video src={video} loop autoPlay muted width="800" height="800" margin="0"></video>
        </div>
      </div>
    );
  }
}

export default Forecast;
