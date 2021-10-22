// import 'boostrap/dist/css/bootstrap.min.css';
import { loadCss } from 'esri-loader';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComp from "./Components/NavbarComp";
import Insight from "./Components/Insight";
import Home from "./Components/pages/Home";
import Dashboard from "./Components/dashboard/dashboard.component"
import Forecast from "./forecast"

function App() {
  loadCss(); 
  return (
    <div>
      <NavbarComp />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast" component={Forecast} /> 
          <Route exact path="/graphs" component={Dashboard} /> 
          <Route exact path="/insight" component={Insight} />
        </Switch>
      </Router>
    </div>
    
  );
}  

export default App;
