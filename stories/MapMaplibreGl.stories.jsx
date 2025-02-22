import React from 'react';
import MapMaplibreGl from '../src/components/MapMaplibreGl';

export default {
  title: 'MapMaplibreGl',
  component: MapMaplibreGl,
};

const mapStyle = {
  "version": 8,
  "sources": {
    "test1": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [0, -10]
            },
            "properties": {}
          }
        ]
      }
    },
    "test2": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [15, 10]
            },
            "properties": {}
          }
        ]
      }
    },
    "test3": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-15, 10]
            },
            "properties": {}
          }
        ]
      }
    }
  },
  "sprite": "",
  "glyphs": "https://orangemug.github.io/font-glyphs/glyphs/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "test1",
      "type": "circle",
      "source": "test1",
      "paint": {
        "circle-radius": 40,
        "circle-color": "red"
      }
    },
    {
      "id": "test2",
      "type": "circle",
      "source": "test2",
      "paint": {
        "circle-radius": 40,
        "circle-color": "green"
      }
    },
    {
      "id": "test3",
      "type": "circle",
      "source": "test3",
      "paint": {
        "circle-radius": 40,
        "circle-color": "blue"
      }
    }
  ]
}

export const Basic = () => {
  return <div style={{height: "100vh", width: "100vw"}}>
    <MapMaplibreGl
      mapStyle={mapStyle}
      inspectModeEnabled={false}
      replaceAccessTokens={(s) => s}
    />
  </div>
};


