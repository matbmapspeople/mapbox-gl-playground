import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor() {}
  map: mapboxgl.Map;
  @ViewChild('mapElement') mapElement: ElementRef;

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc3Blb3BsZSIsImEiOiJjbGNrNWZsM3YwYzdwM3ZwODd3bXhjMmU4In0.ZtFUUSvc-nk9xJD_dyuA5w';
  }

  ngAfterViewInit(){
    this.map = new mapboxgl.Map({
        container: this.mapElement.nativeElement,
    });
}
}
