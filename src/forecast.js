import * as React from "react";

import video from './OctoberSample.mp4'
import ForecastMap from './ForecastMap.js'
import './map.style.css'

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
      
      <div className="map-row row col-sm-12" >
        
        <div className="colortext mt-1 center1"><h1>OCTOBER 14, 2021</h1>
        
        
        
        </div>
          
            <video src={video} loop autoPlay muted width="600" height="600"className="col-sm-12"></video>
          <div className="center1 col-sm-12">
          <img src="/legend2.JPG" alt="Legend2" className="size" />
          <ForecastMap id={1} />
          
          
            <div
              className="content-layerlist size2 "
              id="layerlist1"
              ref={this.listRef}
              
            ></div>
          
          

            



          
    
          </div> 
       
          

       
      </div>
    );
  }
}

export default Forecast;