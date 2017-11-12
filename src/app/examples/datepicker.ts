import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  template: `
            <angular2-date-picker [(ngModel)]="date" [settings]="settings" (onDateSelect)="onDateSelect($event)"></angular2-date-picker>
  `
})
export class DatePickerExample implements OnInit, AfterViewInit {
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: true,
    closeOnSelect: false
  }
  constructor() {

  }
  onDateSelect(date: any){
    console.log(date);
  }
  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
      } catch (e) {
        console.error("error");
      }
    }, 0);
  }
  ngOnInit() {

  }
}
