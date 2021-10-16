// import React, { Component } from 'react';
// import { loadModules } from 'esri-loader';

// // https://arcg.is/uuKT9

import React,{useRef,useEffect,useState} from 'react';
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from '@arcgis/core/widgets/Legend';

import GEOTIFF_DATA from "./geotiff.data.js";
import POLLUTION_DATA from './pollution.data.js';


  const styles =  {
  container: {
    height: '70vh',
    width: '95vw'
  },
   mapEl: {
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%'
  },
}
  function ForecastMap(){
    const [state, setState] = useState({
      
        data: GEOTIFF_DATA,
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
                  zoom: 8,
                  minScale: 0,
                  maxScale: 10000,
                });
                const legend = new Legend({
                  view: view
                })
                
          
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
                view.ui.add(legend, "bottom-right");

                map.addMany(layers);
              }
        }) 
        
        return(
          <div style={styles.container} ref={MapEl}>
            <div style={ styles.mapEl } ref={MapEl}>
              
            </div>
          </div>
    )   
}
       
export default ForecastMap;