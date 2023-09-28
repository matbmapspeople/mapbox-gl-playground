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
    mapboxgl.accessToken = 'ACCESS_TOKEN';
  }

  ngAfterViewInit(){
    this.map = new mapboxgl.Map({
        container: this.mapElement.nativeElement,
    });
}
}
