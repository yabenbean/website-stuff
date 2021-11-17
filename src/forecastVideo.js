import * as React from "react";

import video from './OctoberSample.mp4'
import ForecastMap from './ForecastMap.js'
import './map.style.css'

class ForecastVideo extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      id: 1,
    };
  }



  render() {
    return (
      
        <div className=" map-row row colortext centered">
            <h1 className="centered">OCTOBER 14, 2021</h1>
            <video src={video} loop autoPlay muted width="100%" height="100%"className="col-sm-12"></video>
          </div> 
    
    );
  }
}

export default ForecastVideo;