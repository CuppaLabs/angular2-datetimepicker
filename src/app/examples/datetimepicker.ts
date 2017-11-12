import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  template: `
            <angular2-date-picker [(ngModel)]="date" [settings]="settings"></angular2-date-picker>
  `
})
export class DateTimePickerExample implements OnInit, AfterViewInit  {
  date: Date = new Date();
  settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd-MM-yyyy hh:mm',
        defaultOpen: true
    }
  constructor(){
    
  }
  ngAfterViewInit() {
         setTimeout(()=>{
          try{
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
          }catch(e){
            console.error("error");
          }
        },0);
     }     
   ngOnInit(){

   }
}
