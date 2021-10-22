import * as React from "react";

import video from './Sample.mp4'
import ForecastMap from './ForecastMap.js'

class Forecast extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      id: 1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.listRef.current.innerHTML = "";
  };

  handleClick = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value.type === "number" ? value : parseInt(value),
    });
  };

  render() {
    return (
      <div className="map-row row h-100 w-100 m-3" >
        <h1>Forecast Map</h1>
        <div className="col-12 col-md-2">
            <div
              className=" m-3 layerlist-content"
              id="layerlist1"
              ref={this.listRef}
            ></div>
            
          </div> 
          
          <div className="col-12 col-md-10">
            <ForecastMap id={1} />
          </div>
         

          <div className="col-2 mt-1 center1">
           
            <img src="legend2.JPG" alt="legend" className="col-12"/>
          
          </div>
          <div className="col-12 col-md-8 center1">
          <video src={video} loop autoPlay muted width="800" height="800"></video>
        
          </div> 
          <div className=" center1">
          <h1>Decemeber 26, 2020</h1>
          </div>


          {/* <video src={video} loop autoPlay muted width="700" height="700"></video> */}
       
      </div>
    );
  }
}

export default Forecast;