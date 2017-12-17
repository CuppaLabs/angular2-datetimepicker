import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularDateTimePickerModule } from './angular2-datetimepicker/datepicker.module';
import { AdsenseComponent } from './adsense.component';
import { DatePickerExample } from './examples/datepicker';
import { DateTimePickerExample } from './examples/datetimepicker';
import { SimpleDatePickerExample } from './examples/simpledatepicker';
import { UsingWithFormExample } from './examples/usingWithForms';
import { DateRangePickerExample } from './examples/rangepicker';
import { AppRouterModule } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    AdsenseComponent,
    DatePickerExample,
    DateTimePickerExample,
    SimpleDatePickerExample,
    UsingWithFormExample,
    DateRangePickerExample
      ],
  imports: [
    AngularDateTimePickerModule,
    BrowserModule,
    FormsModule,
    AppRouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }