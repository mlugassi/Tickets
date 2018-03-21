import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  private incidents = [
    {id: '1', date: '14/02/1950', price: 40000},
    {id: '2', date: '22/11/1923', price: 45000},
    {id: '3', date: '13/10/1996', price: 65000},
    {id: '4', date: '04/09/2018', price: 4500},
  ];

  constructor() { }

  ngOnInit() {
  }

}
