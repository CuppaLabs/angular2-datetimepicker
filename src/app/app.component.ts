import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./appstyles.scss']
})
export class AppComponent implements OnInit, AfterViewInit  {
  title = 'app works!';
  date: Date = new Date();
  settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }
  adSettings: any = {
    client:"ca-pub-4525567075133342",
    slot:"2263435109"
  };
  ad2settings: any = {
    client:"ca-pub-4525567075133342",
    slot:"8850561506"
  }
  basicExampleList = [];
  basicExampleSelectedItems = [];
  basicExampleSettings = {};
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
  this.basicExampleList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"}
                        ];
    
    this.basicExampleSelectedItems = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"}];
    this.basicExampleSettings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: false,
                              classes:"myclass custom-class"
                            };
}
onItemSelect(item:any){
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.basicExampleSelectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
   onDeSelectAll(items: any){
    console.log(items);
  }
}
