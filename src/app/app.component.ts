import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './appstyles.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy',
    defaultOpen: true
  }
  constructor() {

  }
  ngAfterViewInit() {

  }
  ngOnInit() {

  }
}
