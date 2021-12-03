import TileLayer from "@arcgis/core/layers/TileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import GroupLayer from "@arcgis/core/layers/GroupLayer";
// air quality

// var sample0 = new TileLayer({
//   title: "00:00",
//   portalItem: {
//     id: "d96921281f3c44bcb99af3216c99931b",
//   },
// });
// // old b7bbab1b84394f7aabd8cab9386b14bd
// var sample01 = new TileLayer({
//   title: "01:00",
//   // visible: false,
//   portalItem: {
//     id: "778fb0abba6f4a2eac0ac06874c69ac2",
//   },
// });

// var sample02 = new TileLayer({
//   title: "02:00",
//   // visible: false,
//   portalItem: {
//     id: "af780c5f55794221985cc78781188d11",
//   },
// });

// var sample03 = new TileLayer({
//   title: "03:00",
//   visible: false,
//   portalItem: {
//     id: "85fbc29307b3460a8fe96aee0f12bf52",
//   },
// });

// var sample04 = new TileLayer({
//   title: "04:00",
//   visible: false,
//   portalItem: {
//     id: "3b8afc69ad5c4d2e947d1040127933ff",
//   },
// });

// var sample05 = new TileLayer({
//   title: "05:00",
//   // visible: false,
//   portalItem: {
//     id: "269932f67ec8488cb6786191f221a3df",
//   },
// });

// var sample06 = new TileLayer({
//   title: "06:00",
//   // visible: false,
//   portalItem: {
//     id: "44a2a54bf01049609c777ac651217661",
//   },
// });

// var sample07 = new TileLayer({
//   title: "07:00",
//   // visible: false,
//   portalItem: {
//     id: "ee1aee24e890489e9594187f8faf8794",
//   },
// });

// var sample08 = new TileLayer({
//   title: "08:00",
//   // visible: false,
//   portalItem: {
//     id: "9819697f0fdd428ca168e9e0b6e72c5a",
//   },
// });

// var sample09 = new TileLayer({
//   title: "09:00",
//   // visible: false,
//   portalItem: {
//     id: "1575de79c988419b84850313e1c38349",
//   },
// });

// var sample10 = new TileLayer({
//   title: "10:00",
//   // visible: false,
//   portalItem: {
//     id: "ae6411a2d1464ecabed5dbbfd23c135c",
//   },
// });

// var sample11 = new TileLayer({
//   title: "11:00",
//   // visible: false,
//   portalItem: {
//     id: "d5aa8c8a900e4e309c2f1dc2a45e6435",
//   },
// });

// var sample12 = new TileLayer({
//   title: "12:00",
//   // visible: false,
//   portalItem: {
//     id: "89e41f6479cf42a2801d2058e4bd1890",
//   },
// });

// var sample13 = new TileLayer({
//   title: "13:00",
//   // visible: false,
//   portalItem: {
//     id: "1f61b0a6672845d2b7e1d48375f81184",
//   },
// });

// var sample14 = new TileLayer({
//   title: "14:00",
//   // visible: false,
//   portalItem: {
//     id: "8438682f4afb49cca9c02c2602c1f92f",
//   },
// });

// var sample15 = new TileLayer({
//   title: "15:00",
//   // visible: false,
//   portalItem: {
//     id: "47487a19e6b24e679aeb7f15d500acae",
//   },
// });

// var sample16 = new TileLayer({
//   title: "16:00",
//   // visible: false,
//   portalItem: {
//     id: "95d4c780202f4d04b08e072aeed1028d",
//   },
// });

// var sample17 = new TileLayer({
//   title: "17:00",
//   // visible: false,
//   portalItem: {
//     id: "525262c274ee44c0a20f0d1caf436964",
//   },
// });

// var sample18 = new TileLayer({
//   title: "18:00",
//   // visible: false,
//   portalItem: {
//     id: "c92ad94db2ef4e30b630534976a6de7e",
//   },
// });

// var sample19 = new TileLayer({
//   title: "19:00",
//   // visible: false,
//   portalItem: {
//     id: "179e7b1be0bc48e0978b618e2bf1aeec",
//   },
// });

// var sample20 = new TileLayer({
//   title: "20:00",
//   // visible: false,
//   portalItem: {
//     id: "123a243ae7b54fb7a7e1e1e908e70846",
//   },
// });

// var sample21 = new TileLayer({
//   title: "21:00",
//   // visible: false,
//   portalItem: {
//     id: "74b21c9484b84d7e9326f5fcb7dcb773",
//   },
// });

// var sample22 = new TileLayer({
//   title: "22:00",
//   // visible: false,
//   portalItem: {
//     id: "4485e2c87d5f4c239ccb55273514bf65",
//   },
// });

// var sample23 = new TileLayer({
//   title: "23:00",
//   // visible: false,
//   portalItem: {
//     id: "164f1a650b534b8e8e7c43d968f211c0",
//   },
// });

// var alltimes =new GroupLayer({
//           title: "Timelayers",
//           visible: true,
//            visibilityMode: "exclusive",
//            show:true,
//            layers: [sample23,sample22,sample21,sample20,sample19,sample18,sample17,sample16,sample15,sample14,sample13,sample12,sample11,sample10,sample09,sample08,sample07,sample06,sample05,sample04,sample03 ,sample02,sample01,sample0],
//                });

var alltimes = new FeatureLayer({
  title: "Pollution",
  portalItem: {
    id:"e72aa8c2fb104acd9d042a0999c5e2f3",
  },
});


const GEOTIFF_DATA = [
  {
    id: 1,
    layers: [alltimes],


  }
]; export default GEOTIFF_DATA