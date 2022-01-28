// import 'boostrap/dist/css/bootstrap.min.css';
import { loadCss } from 'esri-loader';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComp from "./Components/NavbarComp";
import Insight from "./Components/Insight";
import Home from "./Components/pages/Home";
import Dashboard from "./Components/dashboard/dashboard.component"
import MapForecast from "./MapForecast"
import './App.css'
import AirQualityMap from './airqualitymap';
import ForecastVideo from './forecastVideo';
import Hourly from './forecastpage';

function App() {
  loadCss(); 
  return (
    <div className="Color">
      {/* <NavbarComp /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={NavbarComp} />
          <Route exact path="/MapForecast" component={MapForecast} /> 
          <Route exact path="/graphs" component={Dashboard} /> 
          <Route exact path="/airqualitymap" component={AirQualityMap} /> 
          {/* <Route exact path="/forecastVideo" component={ForecastVideo} />  */}

          {/* <Route exact path="/insight" component={Insight} /> */}
        </Switch>
      </Router>
    </div>
    
  );
}  

export default App;
