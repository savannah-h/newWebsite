//import Map from 'ol/Map.js'
//import View from 'ol/View.js'
//import {fromLonLat} from 'ol/proj.js'
//import TileLater from 'ol/later/Tile.js'
// var outLoc;
// var view;
// var map;

//create a map
function init() {
  //outLoc = ol.proj.fromLonLat([41.01224, 28.976018]);

  var view = new ol.View({
    center: ol.proj.fromLonLat([41.0082, 28.976018]),
    zoom: 6
  });

  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadFilesWhileAnimating: true,
    view: view
  });
}

window.onload = init;
