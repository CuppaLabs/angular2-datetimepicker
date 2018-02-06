import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './views/usingwithforms.html'
})
export class UsingWithFormExample implements OnInit {
    title: string = "Using with angular forms";
    formModel = {
        name: '',
        dob:  new Date(),
    };
    dobSettings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd-MM-yyyy',
        defaultOpen: true,
        closeOnSelect: true,
        rangepicker: false

    }
    constructor() {

    }
    onDateSelect(date: any) {
        console.log(date);
    }
    ngOnInit() {

    }
    submitted = false;
    onSubmit() { 
        console.log('form submitted');
        this.submitted = true; 
        
    }

}
