import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from './datepicker.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './clickOutside';
@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [DatePicker, ClickOutsideDirective],
    exports: [DatePicker,FormsModule, ClickOutsideDirective]
})
export class AngularDateTimePickerModule{

}