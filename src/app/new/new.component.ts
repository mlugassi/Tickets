import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  location="";
  about_address = "";
  city = "";
  phone = "";
  to_address = "";
  contact_911 ="";
  reported_by = "";
  incident_name = "";
  now = false;
  constructor() { }

  ngOnInit() {
  }

}
