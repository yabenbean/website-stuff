// import 'boostrap/dist/css/bootstrap.min.css';
import { loadCss } from 'esri-loader';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComp from "./Components/NavbarComp";

import Dashboard from "./Components/dashboard/dashboard.component"
import MapForecast from "./MapForecast"
import './App.css'
import AirQualityMap from './airqualitymap';

function App() {
  loadCss(); 
  return (
    <div className="backgroungImage">
      

      
      {/* <NavbarComp /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={NavbarComp} />
          <Route exact path="/MapForecast" component={MapForecast} /> 
          <Route exact path="/graphs" component={Dashboard} /> 
          <Route exact path="/airqualitymap" component={AirQualityMap} /> 

         
        </Switch>
      </Router>
    </div>
    
  );
}  

export default App;
