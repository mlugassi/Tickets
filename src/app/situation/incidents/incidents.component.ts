import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  private incidents = [
    {fname: 'michael', lname: 'lugassi', email: 'mlugass@gmail.com'},
    {fname: 'refael', lname: 'zanzuri', email: 'rzanzuri@gmail.com'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
