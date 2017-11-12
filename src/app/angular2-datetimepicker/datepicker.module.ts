import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from './datepicker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [DatePicker],
    exports: [DatePicker,FormsModule]
})
export class AngularDateTimePickerModule{

}