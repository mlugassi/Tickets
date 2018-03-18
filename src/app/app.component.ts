import { Component } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  style_css = "navbar navbar-expand-lg navbar-dark bg-primary";
  style_day = "navbar navbar-expand-lg navbar-dark bg-primary";
  style_night = "navbar navbar-expand-lg navbar-dark bg-dark";
  Style_radio= {"color":"white"};
  check = true;
  onSelectionChange() {
    this.check = !this.check;
    if (!this.check)
      this.style_css = this.style_night;
    else
      this.style_css = this.style_day;
  }
}
