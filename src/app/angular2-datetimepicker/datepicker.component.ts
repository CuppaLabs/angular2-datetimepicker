import { Component, OnInit, forwardRef, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Settings } from './interface';
import * as moment from 'moment';

export const DATEPICKER_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePicker),
    multi: true
};

@Component({
    selector: 'angular2-date-picker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
})

export class DatePicker implements OnInit, ControlValueAccessor {

    @Input()
    settings: Settings;

    @Output()
    onDateSelect:EventEmitter<Date> = new EventEmitter<Date>();

    selectedDate: String;
    date: Date;
    popover: Boolean = false;
    
    cal_days_in_month:Array<any> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];    
    timeViewDate:Date = new Date(this.date);
    hourValue:number = 0;
    minValue:number = 0;
    timeViewMeridian:string = "";
    timeView:boolean = false;
    yearView: Boolean = false;
    yearsList:Array<any> = [];
    monthDays: Array<any> = [];
    monthsView:boolean = false;
    today:Date = new Date();
    
    defaultSettings: Settings = {
        defaultOpen: false,
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy hh:mm a',
        cal_days_labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        cal_full_days_lables: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        cal_months_labels: ['January', 'February', 'March', 'April',
                            'May', 'June', 'July', 'August', 'September',
                            'October', 'November', 'December'],
        cal_months_labels_short: ['JAN', 'FEB', 'MAR', 'APR',
                                'MAY', 'JUN', 'JUL', 'AUG', 'SEP',
                                'OCT', 'NOV', 'DEC'],
        closeOnSelect: true
    }
    constructor(){

    }
    ngOnInit(){
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if(this.settings.defaultOpen){
            this.popover = true;
        }
    }
    private onTouchedCallback: () =>  {};
    private onChangeCallback: (_: any) => {};
    writeValue(value: any) {
        if (value !== undefined && value !== null) {
            this.initDate(value);
        }
        else{
            this.date = new Date();
        }
        this.generateDays();
    }
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
   initDate(val:string){
        this.date = new Date(val);
        if(this.date.getHours() <= 11 ){
                    this.hourValue = this.date.getHours();
                    this.timeViewMeridian = "AM";
                }
                else{
                    this.hourValue = this.date.getHours() - 12;
                    this.timeViewMeridian = "PM";
                }
                if(this.date.getHours() == 0 || this.date.getHours() == 12){
                this.hourValue = 12;
            }
        this.minValue = this.date.getMinutes();
   }
   generateDays(){
                  this.monthDays = [];
                var year = this.date.getFullYear(),
                    month = this.date.getMonth(),
                    current_day = this.date.getDate(),
                    today = new Date();
                var firstDay = new Date(year, month, 1);
                var startingDay = firstDay.getDay();
                var monthLength = this.getMonthLength(month,year);
                var day = 1;
                var dateArr = [];
                var dateRow =[];
                // this loop is for is weeks (rows)
                for (var i = 0; i < 9; i++) {
                    // this loop is for weekdays (cells)
                    dateRow = [];
                    for (var j = 0; j <= 6; j++) { 
                        var dateCell = null;
                    if (day <= monthLength && (i > 0 || j >= startingDay)) {
                        dateCell = day;
                    if(day == current_day){
                       // dateCell.classList.add('selected-day');
                    }
                    if(day == this.today.getDate() &&  this.date.getMonth() == today.getMonth() &&  this.date.getFullYear() == today.getFullYear()){
                       // dateCell.classList.add('today');
                    }
                        day++;
                    }
                    dateRow.push(dateCell);
                    }
                    // stop making rows if we've run out of days
                    if (day > monthLength) {
                        dateArr.push(dateRow);
                    break;
                    } else {
                        dateArr.push(dateRow);
                    }
                }
                  this.monthDays = dateArr;
            }
    generateYearList(param:string){
                var startYear = null;
                var currentYear = null;
                if(param == "next"){
                    startYear = this.yearsList[8] + 1;
                    currentYear = this.date.getFullYear();
                }
                else if(param == "prev"){
                    startYear = this.yearsList[0] - 9;
                    currentYear = this.date.getFullYear();
                }
                else{
                    currentYear = this.date.getFullYear();
                    startYear = currentYear - 4;
                    this.yearView = !this.yearView;
                    this.monthsView = false;
                }
                 for(var k=0; k< 9; k++){
                         this.yearsList[k] = startYear + k;
                    }
            }
     getMonthLength(month:number,year:number){
                var monthLength = this.cal_days_in_month[month];
                
                // compensate for leap year
                if (month == 1) { // February only!
                    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
                    monthLength = 29;
                    }
                }
                return monthLength;
            }
     toggleMonthView(){
                this.yearView = false;
                this.monthsView =  !this.monthsView;
            }
    toggleMeridian(val:string){
                this.timeViewMeridian = val;
            }
    setTimeView(){
                if(this.timeViewMeridian == "AM"){
                    if(this.hourValue == 12){
                        this.date.setHours(0);
                    }
                    else{
                        this.date.setHours(this.hourValue);
                    }
                    this.date.setMinutes(this.minValue);
                }
                else{
                    if(this.hourValue == 12){
                        this.date.setHours(this.hourValue);
                    }
                    else{
                        this.date.setHours(this.hourValue + 12);
                    }
                    this.date.setMinutes(this.minValue);
                }
                this.date = new Date(this.date);
                this.timeView = !this.timeView;
            }
     setDay(evt:any){
                if(evt.target.innerHTML){
                  var selectedDay = parseInt(evt.target.innerHTML);
                  this.date = new Date(this.date.setDate(selectedDay));  
                  console.log(this.date);
                  this.onChangeCallback(this.date.toString());
                  if(this.settings.closeOnSelect){
                    this.popover = false;
                    this.onDateSelect.emit(this.date);
                  }
                }
            }
    setYear(evt:any){
                  console.log( evt.target );
                  var selectedYear = parseInt(evt.target.getAttribute('id'));
                  this.date = new Date(this.date.setFullYear(selectedYear)); 
                   this.yearView = !this.yearView;
                   this.generateDays();
            }
    setMonth(evt:any){
                if(evt.target.getAttribute('id')){
                 var selectedMonth = this.settings.cal_months_labels_short.indexOf(evt.target.getAttribute('id'));
                   this.date = new Date(this.date.setMonth(selectedMonth));
                   this.monthsView = !this.monthsView;
                   this.generateDays();
                }
            }
    prevMonth(e:any){
                e.stopPropagation();
                var self = this;
                if(this.date.getMonth() == 0){
                    this.date.setMonth(11);
                    this.date.setFullYear(this.date.getFullYear() - 1);
                }else{
                    var prevmonthLength = this.getMonthLength(this.date.getMonth() - 1, this.date.getFullYear());
                    var currentDate = this.date.getDate();
                    if(currentDate > prevmonthLength ){
                        this.date.setDate(prevmonthLength);
                    }
                    this.date.setMonth(this.date.getMonth() - 1);
                }
                 this.date = new Date(this.date);
                 this.generateDays();
            }
     nextMonth(e:any){
                e.stopPropagation();
                var self = this;
                if(this.date.getMonth() == 11){
                    this.date.setMonth(0);
                    this.date.setFullYear(this.date.getFullYear() + 1);
                }else{
                    var nextmonthLength = this.getMonthLength(this.date.getMonth() + 1, this.date.getFullYear());
                    var currentDate = this.date.getDate();
                    if(currentDate > nextmonthLength){
                        this.date.setDate(nextmonthLength);
                    }
                    this.date.setMonth(this.date.getMonth() + 1);
                    
                }
                this.date = new Date(this.date);
                this.generateDays();
            }
       onChange(evt:any){
                console.log(evt);
            }
       incHour(){
            if(this.hourValue < 12){
                this.hourValue += 1;
                console.log(this.hourValue);
            } 
       }
       decHour(){
            if(this.hourValue > 1){
                this.hourValue -= 1;
                console.log(this.hourValue);
            } 
       }
       incMinutes(){
            if(this.minValue < 59){
                this.minValue += 1;
                console.log(this.minValue);
            } 
       }
       decMinutes(){
            if(this.minValue > 0){
                this.minValue -= 1;
                console.log(this.minValue);
            } 
       }
       done(){
           this.onChangeCallback(this.date.toString());
           this.popover = false;
           this.onDateSelect.emit(this.date);
       }
}