// import React, { Component } from 'react';
// import { loadModules } from 'esri-loader';

// // https://arcg.is/uuKT9

import React,{useRef,useEffect,useState} from 'react';
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from '@arcgis/core/widgets/Legend';

import POLLUTION_DATA from "./pollution.data.js";

import "./map.style.css"
import { Accordion } from 'react-bootstrap';


  const styles =  {
  container: {
    height: '70vh',
    width: '85vw'
  },
   mapEl: {
    height: '100%',
    width: '100%'
  },
}
  function Map(){
    const [state, setState] = useState({
      
        data: POLLUTION_DATA,
      });
    
    const layers = [];
    
    const MapEl=useRef(null)

    useEffect(
        ()=>{
             
            if (MapEl.current) {
                // Initialize Map
                const map = new ArcGISMap({
                  basemap: "topo-vector",
                });
          
                const view = new MapView({
                  map,
                  container: MapEl.current,
                  center: [-118.2437, 34.0522],
                  zoom: 7,
                  
                });
                let legend = new Legend({
                 
                  view: view,
                
                  
                });
                
          
                state.data.map((data) => {
                  if (state.id === data.id) {
                    data.layers.map((layer) => {
                      layers.push(layer);
                    });
                  }
                });
          
                view.when(() => {
                  new LayerList({
                    view: view,
                    container: "layerlist"
                  });
                });
          
                view.ui.move("zoom", "top-right");
                view.ui.add(legend ,"bottom-left");
                 map.addMany(layers);
             }
        }) 
        
        return(
          
          <div class="container mt-5" style={styles.container}>
           
            <div class="container m-2" style={ styles.mapEl } ref={MapEl}>
              
            </div>
          </div>
    )   
}
       
export default Map;