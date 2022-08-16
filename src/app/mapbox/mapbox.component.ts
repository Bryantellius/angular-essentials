import { Component, OnInit } from "@angular/core";
import { MapService } from "../map.service";
import * as mapboxgl from "mapbox-gl";
import { GeoJson, FeatureCollection } from "../map";
import { Observable } from "rxjs";

@Component({
  selector: "app-mapbox",
  templateUrl: "./mapbox.component.html",
  styleUrls: ["./mapbox.component.css"],
})
export class MapboxComponent implements OnInit {
  public map!: mapboxgl.Map;
  public source!: any;
  public markers!: Observable<GeoJson[]>;
  public lat: number = 37.75;
  public long: number = -122.41;
  public style = "mapbox://styles/mapbox/outdoors-v9";
  public message: string = "";

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.markers = this.mapService.getMarkers();
    this.initializeMap();
  }

  private initializeMap(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;
        this.map.flyTo({
          center: [this.long, this.lat],
        });
      });
    }

    this.buildMap();
  }

  private buildMap(): void {
    this.map = new mapboxgl.Map({
      container: "map",
      style: this.style,
      zoom: 13,
      center: [this.long, this.lat],
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on("click", (event: mapboxgl.MapMouseEvent) => {
      const coordinates: mapboxgl.LngLatLike = [
        event.lngLat.lng,
        event.lngLat.lat,
      ];
      const newMarker = new GeoJson(coordinates, { message: this.message });
      this.mapService.createMarker(newMarker);
    });

    this.map.on("load", (event) => {
      this.map.addSource("test", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      this.source = this.map.getSource("test");

      this.markers.subscribe((markers) => {
        let data: any = new FeatureCollection(markers);
        this.source.setData(data);
      });

      this.map.addLayer({
        id: "test",
        source: "test",
        type: "symbol",
        layout: {
          "text-field": "{message}",
          "text-size": 24,
          "text-transform": "uppercase",
          "icon-image": "rocket-15",
          "text-offset": [0, 1.5],
        },
        paint: {
          "text-color": "#f16624",
          "text-halo-color": "#fff",
          "text-halo-width": 2,
        },
      });
    });
  }

  public removeMarker(marker: any): void {
    this.mapService.removeMarker(marker.$key);
  }

  public flyTo(data: GeoJson): void {
    this.map.flyTo({
      center: data.geometry.coordinates,
    });
  }
}
