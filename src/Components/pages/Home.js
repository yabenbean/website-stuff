import * as React from "react";

import Map from "../../Map";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Air Pollution and Air Quality</h1>

        <Map />

        <img src="/Description.JPG" alt="airdescription" className="col-12" />
      </div>
    );
  }
}

export default Home;
