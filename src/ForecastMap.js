import React, { useRef, useEffect, useState } from "react";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList";
// import Legend from '@arcgis/core/widgets/Legend';
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import WebMap from "@arcgis/core/WebMap";

import GEOTIFF_DATA from "./geotiff.data.js";
//import "./map.style.scss";

const styles =  {
  container: {
    height: '70vh',
    width: '85vw'
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
      const webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "be160ed79b4749f2bb119e99c56096fc"
        }
      });

      const map = new ArcGISMap({
        basemap: "topo-vector",
      });

      const view = new MapView({
        map: webmap,
        container: mapDiv.current,
        center: [-118.2437, 34.050],
        zoom: 9,
      });

      // const legend = new Legend({
      //   view: view
      // })

                      // Create a TimeSlider for the first decade of the 21st century.
// set the TimeSlider's view property.
// Only show content for the 1st year of the decade for all
// time aware layers in the view.
const timeSlider = new TimeSlider({
  container: "timeSliderDiv",
  view: view,
  // show data within a given time range
  // in this case data within one year
  mode: "instant",
  playrate: 10,
  fullTimeExtent: { // entire extent of the timeSlider
    start: new Date(2021, 9, 13),
    end: new Date(2021, 9, 14)
  },
  timeExtent: { // location of timeSlider thumbs
    start: new Date(2021, 9, 13),
    end: new Date(2021, 9, 14)
  }
});
view.ui.add(timeSlider, "bottom-left");

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
          container: "layerlist" + id.toString(),
        });
      });

      view.ui.move("zoom", "top-right");
      // view.ui.add(legend, "bottom-right");
      map.addMany(layers);
    }
  }, [state]);

  return <div class="container mt-5" style={styles.container}>
           
  <div class="container m-2" style={ styles.mapDiv } ref={mapDiv}>
    
  </div>
</div>
}

export default ForecastMap;