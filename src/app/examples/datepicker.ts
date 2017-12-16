import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './views/basic.html'
})
export class DatePickerExample implements OnInit {
  date: any = {startDate: new Date('04-18-1990'), endDate: new Date('10-30-2017')};
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: true,
    closeOnSelect: false,
    rangepicker: true
  }
  constructor() {

  }
  onDateSelect(date: any){
    console.log(date);
  }
  ngOnInit() {

  }
  title: string = "Basic Example";
}
