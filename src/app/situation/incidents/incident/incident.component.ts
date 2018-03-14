import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  constructor() { }

  id: number;
  fname: string;
  lname: string;
  email: string;
  // more properties in the future
  
  ngOnInit() {
  }

}
