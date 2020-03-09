import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './views/rangepicker.html'
})
export class DateRangePickerExample implements OnInit {
  date: any = {startDate: new Date('04-18-1990'), endDate: new Date('04-20-2017')};
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
  title: string = "Range picker Example";
}
