import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    templateUrl: './views/usingwithforms.html'
})
export class UsingWithFormExample implements OnInit {
    formModel = {
        name: '',
        dob:  new Date(),
    };
    dobSettings = {
        bigBanner: true,
        timePicker: false,
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
    onSubmit() { this.submitted = true; }

}
