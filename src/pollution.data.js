import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

// air quality
var airpollution = new FeatureLayer({
  title: "Pollution",
  portalItem: {
    id: "2d718d2733a74d1689d72b922c0ac4f4",
  },
});


const POLLUTION_DATA = [
  {
    layers: [airpollution]
  }
];

export default POLLUTION_DATA;