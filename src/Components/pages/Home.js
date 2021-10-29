import * as React from "react";

import Map from "../../Map";

class Home extends React.Component {
  render() {
    return (
      <div class="m-3 ">
        <div className="colortext">
        <h1>Air Pollution and Air Quality</h1>
        </div>
        <Map />
        <br/>
        <br/>
        <div class="container m-10 center1">
        <img src="/Description.JPG" alt="airdescription" className="col-10 border2" />
        </div>
      </div>
    );
  }
}

export default Home;
