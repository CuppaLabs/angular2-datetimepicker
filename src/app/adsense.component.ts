  import {Component,OnInit,AfterViewInit, Input} from '@angular/core'

    @Component({
      moduleId: module.id,
      selector: 'google-adsense',
      template: ` <div>
            <ins class="adsbygoogle"
                style="display:inline-block;width:300px;height:250px;"
                [attr.data-ad-client]="adconfig.client"
                [attr.data-ad-slot]="adconfig.slot"></ins>
             </div>   
                <br>            
      `,

    })

    export class AdsenseComponent implements OnInit, AfterViewInit {

        adconfig:any = {};
        @Input()
        settings: any;

      constructor() {    
      } 
      ngOnInit(){
            this.adconfig = Object.assign(this.adconfig, this.settings);
      }
      ngAfterViewInit() {
         setTimeout(()=>{
          try{
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
          }catch(e){
            console.error("error");
          }
        },2000);
     }     
    }