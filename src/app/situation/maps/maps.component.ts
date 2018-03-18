import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  location = "Israel";
  maps= [];
  constructor(private mapsService: MapsService){}

  searchLocation() {
    this.mapsService.getLatAndLong(this.location)
      .subscribe(
        (response: Response) => {
           let data  = response.text(); //arrayBuffer();// json().results.geometry.location.lat;
           alert(data);
           //this.cars = data;
       },
       (error)    => console.log(error)
    );
  }
}