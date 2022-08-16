/*
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "message": "Hello World!"
  }
}
*/

import { LngLatLike } from "mapbox-gl";

export interface IGeometry {
  type: string;
  coordinates: LngLatLike;
}

export interface IGeoJson {
  type: string;
  geometry: IGeometry;
  properties?: any;
  $key?: string;
}

export class GeoJson implements IGeoJson {
  type: string = "Feature";
  geometry: IGeometry;
  $key?: string;

  constructor(coordinates: LngLatLike, public properties?: any) {
    this.geometry = {
      type: "Point",
      coordinates,
    };
  }
}

export class FeatureCollection {
  type = "FeatureCollection";
  constructor(public features: Array<GeoJson>) {
    this.features = features;
  }
}
