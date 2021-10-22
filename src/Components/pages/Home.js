import * as React from "react";

import Map from "../../Map";

class Home extends React.Component {
  render() {
    return (
      <div class="m-3">
        <h1>Air Pollution and Air Quality</h1>
        
        <Map />
        <br/>
        <br/>
        <div class="container m-10">
        <img src="/Description.JPG" alt="airdescription" className="col-12" />
        </div>
      </div>
    );
  }
}

export default Home;
