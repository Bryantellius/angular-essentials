import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { GeoJson } from "./map";
import * as mapboxgl from "mapbox-gl";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MapService {
  public markers: Array<GeoJson> = [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [125.6, 10.1],
      },
      properties: {
        message: "Hello World!",
      },
    },
  ];

  constructor() {
    (mapboxgl.accessToken as any) = environment.mapbox.accessToken;
  }

  public getMarkers(): Observable<Array<GeoJson>> {
    return new Observable((observer) => {
      observer.next(this.markers);
    });
  }

  public createMarker(data: GeoJson): void {
    this.markers.push(data);
  }

  public removeMarker($key: string): void {
    this.markers.filter((marker: GeoJson) => marker.$key !== $key);
  }
}
