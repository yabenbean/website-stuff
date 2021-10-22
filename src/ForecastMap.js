// import React, { Component } from 'react';
// import { loadModules } from 'esri-loader';

// // https://arcg.is/uuKT9

import React,{useRef,useEffect,useState} from 'react';
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from '@arcgis/core/widgets/Legend';

import GEOTIFF_DATA from "./geotiff.data.js";


const styles =  {
  container: {
    height: '120vh',
    width: '60vw'
  },
   mapDiv: {
    height: '100%',
    width: '100%'
  },
}

function ForecastMap({ id }) {
  const [state, setState] = useState({
    id: id,
    data: GEOTIFF_DATA,
  });

  if (id !== state.id) {
    setState((prevState) => {
      return {
        ...prevState,
        id: id,
      };
    });
  }

  const layers = [];
  // console.log(state);
  // console.log(state.id);

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      // Initialize Map
      const map = new ArcGISMap({
        basemap: "topo-vector",
      });

      const view = new MapView({
        map,
        container: mapDiv.current,
        center: [-118.1, 33.75],
        zoom: 10,
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
          container: "layerlist"+id,
        });
      });

      view.ui.move("zoom", "top-right");
      view.ui.add(legend, "bottom-left");
      map.addMany(layers);
    }
  }, [state]);
        
        return(
            <div class="container mt-3 col-12" style={styles.container}>
          
            <div class="container col-10" style={ styles.mapDiv} ref={mapDiv} >
           
        
            </div>
          
          </div>
    )   
}
       
export default ForecastMap;