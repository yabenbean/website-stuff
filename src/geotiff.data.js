import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Layer from "@arcgis/core/layers/Layer"
import TileLayer from "@arcgis/core/layers/TileLayer";
// air quality
var geotiff = new TileLayer({
  title: "GeoTiff",
  portalItem: {
    id: "5d31fb948e7a433ebad568a40dc313e7",
  },
});


const GEOTIFF_DATA = [
  {
    layers: [geotiff]
  }
];


export default GEOTIFF_DATA