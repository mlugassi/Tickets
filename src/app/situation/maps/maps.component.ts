import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { MapsService } from './maps.service';
import { stat } from 'fs';

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
  constructor(private mapsService: MapsService) { }

  searchLocation() {
    //this.location=
    this.mapsService.getLatAndLong(this.location)
      .subscribe(
        (response: Response) => {
          let data = response.text();
          let status_begin = data.search("status");
          let status = '"' + data.substring(status_begin, data.length-2);
          if (status.includes("OK")) {
            let location_begin = data.search("location");
            let sub_data = data.substring(location_begin, data.length);
            let lat_begin = sub_data.search("lat");
            let lng_begin = sub_data.search("lng");
            let lat = Number(sub_data.substring(lat_begin + 6, lat_begin + 16));
            let lng = Number(sub_data.substring(lng_begin + 6, lng_begin + 16));
            if (isNaN(lat) || isNaN(lng))
              alert("Error with parsing " + lat + " and " + lng);
            else {
              this.lat = lat;
              this.lng = lng;
            }
          }
          else
          alert("The Status isn't OK!! \n" + status);
        },
        (error) => console.log(error)
      );
  }
}