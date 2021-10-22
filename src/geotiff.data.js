import TileLayer from "@arcgis/core/layers/TileLayer";
// air quality

var sample0 = new TileLayer({
  title: "Hour 1",
  portalItem: {
    id: "b7bbab1b84394f7aabd8cab9386b14bd",
  },
});

var sample01 = new TileLayer({
  title: "Hour 2",
  visible: false,
  portalItem: {
    id: "c02790c80c3f402e90d4faea6c201cf9",
  },
});

var sample02 = new TileLayer({
  title: "Hour 3",
  visible: false,
  portalItem: {
    id: "79699372b0b942eaac67103bba38ac78",
  },
});

var sample03 = new TileLayer({
  title: "Hour 4",
  visible: false,
  portalItem: {
    id: "8890a1ebc524456dba15735e57056802",
  },
});

var sample04 = new TileLayer({
  title: "Hour 5",
  visible: false,
  portalItem: {
    id: "b1c5a295485f468fbee42c75e3be48a7",
  },
});

var sample05 = new TileLayer({
  title: "Hour 6",
  visible: false,
  portalItem: {
    id: "2a886a772c2e4080893a5b77207294da",
  },
});

const GEOTIFF_DATA = [
  {
    id: 1,
    layers: [sample05,sample04, sample03, sample02, sample01, sample0,  ],
    

  }
];


export default GEOTIFF_DATA