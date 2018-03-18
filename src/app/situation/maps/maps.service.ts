import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MapsService {
    constructor(private http:Http) { }

    getLatAndLong(location) {
        var final_query = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyAB8RSikRLvN-EUlfgN6dCWZ23foJfwGLk";
        return this.http.get(final_query);
    }
}