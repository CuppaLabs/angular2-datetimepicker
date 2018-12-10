import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  template: `
            <angular2-date-picker [(ngModel)]="date" [settings]="settings"></angular2-date-picker>
  `
})
export class DateTimePickerExample implements OnInit {
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false,
    minDate: new Date(),
    preserveTimeValue: true,
    incrementByMinutes: 30
  }
  constructor() {

  }
  ngOnInit() {

  }
}
