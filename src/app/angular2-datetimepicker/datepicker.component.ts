import { Component, OnInit, forwardRef, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateRange } from './model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Settings } from './interface';

export const DATEPICKER_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePicker),
    multi: true
};

@Component({
    selector: 'angular2-date-picker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss', './rangepicker.scss'],
    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
})

export class DatePicker implements OnInit, ControlValueAccessor {

    @Input()
    settings: Settings;

    @Output()
    onDateSelect: EventEmitter<Date> = new EventEmitter<Date>();

    selectedDate: String;
    date: Date;
    dateRange: DateRange = new DateRange();
    popover: Boolean = false;

    cal_days_in_month: Array<any> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    timeViewDate: Date = new Date(this.date);
    hourValue: number = 0;
    toHourValue: number = 0;
    minValue: number = 0;
    toMinValue: number = 0;
    timeViewMeridian: string = "";
    toTimeViewMeridian: string = "";
    timeView: boolean = false;
    yearView: Boolean = false;
    yearsList: Array<any> = [];
    monthDays: Array<any> = [];
    toMonthDays: Array<any> = [];
    monthsView: boolean = false;
    today: Date = new Date();
    leftDate: Date = new Date();
    rightDate: Date = new Date();

    defaultSettings: Settings = {
        defaultOpen: false,
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy hh:mm a',
        cal_days_labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        cal_full_days_lables: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        cal_months_labels: ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'],
        cal_months_labels_short: ['JAN', 'FEB', 'MAR', 'APR',
            'MAY', 'JUN', 'JUL', 'AUG', 'SEP',
            'OCT', 'NOV', 'DEC'],
        closeOnSelect: true,
        rangepicker: false
    }
    constructor() {

    }
    ngOnInit() {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.defaultOpen) {
            this.popover = true;
        }
    }
    private onTouchedCallback: () => {};
    private onChangeCallback: (_: any) => {};
    writeValue(value: any) {
        if (value !== undefined && value !== null) {
            if (!this.settings.rangepicker) {
                this.initDate(value);
                this.monthDays = this.generateDays(this.date);
            }
            else {
                this.initDateRange(value);
                if (this.dateRange.startDate.getMonth() === this.dateRange.endDate.getMonth() && this.dateRange.startDate.getFullYear() === this.dateRange.endDate.getFullYear()) {
                    this.leftDate = new Date(this.dateRange.startDate);
                    var tempDate = new Date(this.dateRange.startDate);
                    tempDate.setMonth(tempDate.getMonth() + 1);
                    tempDate.setDate(1);
                    this.rightDate = new Date(tempDate);
                    this.monthDays = this.generateDays(this.leftDate);
                    this.toMonthDays = this.generateDays(this.rightDate);
                }
                else {
                    this.leftDate = new Date(this.dateRange.startDate);
                    this.rightDate = new Date(this.dateRange.endDate);
                    this.monthDays = this.generateDays(this.leftDate);
                    this.toMonthDays = this.generateDays(this.rightDate);
                }

                console.log(this.monthDays);
            }

        }
        else {
            this.date = new Date();
        }
    }
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
    initDate(val: string) {
        this.date = new Date(val);
        if (this.date.getHours() <= 11) {
            this.hourValue = this.date.getHours();
            this.timeViewMeridian = "AM";
        }
        else {
            this.hourValue = this.date.getHours() - 12;
            this.timeViewMeridian = "PM";
        }
        if (this.date.getHours() == 0 || this.date.getHours() == 12) {
            this.hourValue = 12;
        }
        this.minValue = this.date.getMinutes();
    }
    initDateRange(val: DateRange) {
        this.dateRange.startDate = new Date(val.startDate);
        this.dateRange.endDate = new Date(val.endDate);
        if (this.dateRange.startDate.getHours() <= 11) {
            this.hourValue = this.dateRange.startDate.getHours();
            this.timeViewMeridian = "AM";
        }
        else {
            this.hourValue = this.dateRange.startDate.getHours() - 12;
            this.timeViewMeridian = "PM";
        }
        if (this.dateRange.startDate.getHours() == 0 || this.dateRange.startDate.getHours() == 12) {
            this.hourValue = 12;
        }
        this.minValue = this.dateRange.startDate.getMinutes();

        if (this.dateRange.endDate.getHours() <= 11) {
            this.toHourValue = this.dateRange.endDate.getHours();
            this.toTimeViewMeridian = "AM";
        }
        else {
            this.toHourValue = this.dateRange.endDate.getHours() - 12;
            this.toTimeViewMeridian = "PM";
        }
        if (this.dateRange.endDate.getHours() == 0 || this.dateRange.endDate.getHours() == 12) {
            this.toHourValue = 12;
        }
        this.toMinValue = this.dateRange.endDate.getMinutes();

    }
    generateDays(date: Date) {
        var year = date.getFullYear(),
            month = date.getMonth(),
            current_day = date.getDate(),
            today = new Date();
        var firstDay = new Date(year, month, 1);
        var startingDay = firstDay.getDay();
        var monthLength = this.getMonthLength(month, year);
        var day = 1;
        var dateArr = [];
        var dateRow = [];
        // this loop is for is weeks (rows)
        for (var i = 0; i < 9; i++) {
            // this loop is for weekdays (cells)
            dateRow = [];
            for (var j = 0; j <= 6; j++) {
                var dateCell = null;
                if (day <= monthLength && (i > 0 || j >= startingDay)) {
                    dateCell = day;
                    if (day == current_day) {
                        // dateCell.classList.add('selected-day');
                    }
                    if (day == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()) {
                        // dateCell.classList.add('today');
                    }
                    day++;
                }
                dateRow.push({ day: dateCell, date: new Date((month + 1) + '-' + dateCell + '-' + date.getFullYear()) });
            }
            // stop making rows if we've run out of days
            if (day > monthLength) {
                dateArr.push(dateRow);
                break;
            } else {
                dateArr.push(dateRow);
            }
        }
        return dateArr;
    }
    generateYearList(param: string) {
        var startYear = null;
        var currentYear = null;
        if (param == "next") {
            startYear = this.yearsList[8] + 1;
            currentYear = this.date.getFullYear();
        }
        else if (param == "prev") {
            startYear = this.yearsList[0] - 9;
            currentYear = this.date.getFullYear();
        }
        else {
            currentYear = this.date.getFullYear();
            startYear = currentYear - 4;
            this.yearView = !this.yearView;
            this.monthsView = false;
        }
        for (var k = 0; k < 9; k++) {
            this.yearsList[k] = startYear + k;
        }
    }
    getMonthLength(month: number, year: number) {
        var monthLength = this.cal_days_in_month[month];

        // compensate for leap year
        if (month == 1) { // February only!
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                monthLength = 29;
            }
        }
        return monthLength;
    }
    toggleMonthView() {
        this.yearView = false;
        this.monthsView = !this.monthsView;
    }
    toggleMeridian(val: string) {
        this.timeViewMeridian = val;
    }
    setTimeView() {
        if (this.timeViewMeridian == "AM") {
            if (this.hourValue == 12) {
                this.date.setHours(0);
            }
            else {
                this.date.setHours(this.hourValue);
            }
            this.date.setMinutes(this.minValue);
        }
        else {
            if (this.hourValue == 12) {
                this.date.setHours(this.hourValue);
            }
            else {
                this.date.setHours(this.hourValue + 12);
            }
            this.date.setMinutes(this.minValue);
        }
        this.date = new Date(this.date);
        this.timeView = !this.timeView;
    }

    /***
     * (ssd > endDay -> startDay = endDay -> step = 1 ) && (sed > startDay -> 2)
     * (ssd < endDay -> startDay = ssd - step =1) && (sed < startDay -> 2 )
     * 
     */

    rangeSelected: number = 0;
    setDay(evt: any, type: string) {
        if (evt.target.innerHTML) {
            var selectedDay = new Date(evt.target.getAttribute('data-label'));
            if (type == 'range') {
                if (this.rangeSelected == 0) {
                    this.setStartDate(selectedDay);
                }
                else if (this.rangeSelected == 1) {
                    this.setEndDate(selectedDay);
                }
            }
            else {
                this.date = new Date(selectedDay);
                this.onChangeCallback(this.date.toString());

            }
            if (this.settings.closeOnSelect) {
                this.popover = false;
                this.onDateSelect.emit(this.date);
            }
        }
    }
    setStartDate(selectedDate: Date) {
        if (selectedDate < this.dateRange.endDate) {
            this.dateRange.startDate = new Date(selectedDate);
        }
        else if (selectedDate > this.dateRange.endDate) {
            this.dateRange.startDate = new Date(selectedDate);
            this.dateRange.endDate = new Date(selectedDate);
        }
        this.rangeSelected = 1;
    }
    setEndDate(selectedDate: Date) {
        if (selectedDate > this.dateRange.startDate && (this.dateRange.startDate != this.dateRange.endDate)) {
            this.dateRange.endDate = new Date(selectedDate);
        }
        else if (selectedDate > this.dateRange.startDate && (this.dateRange.startDate == this.dateRange.endDate)) {
            this.dateRange.endDate = new Date(selectedDate);
        }
        else if (selectedDate < this.dateRange.startDate && (this.dateRange.startDate != this.dateRange.endDate)) {
            this.dateRange.startDate = new Date(selectedDate);
            this.dateRange.endDate = new Date(selectedDate);
        }
        else if (selectedDate < this.dateRange.startDate && (this.dateRange.startDate == this.dateRange.endDate)) {
            this.dateRange.startDate = new Date(selectedDate);
            this.dateRange.endDate = new Date(selectedDate);
        }
        else if (selectedDate.getTime() == this.dateRange.startDate.getTime()) {
            this.dateRange.startDate = new Date(selectedDate);
            this.dateRange.endDate = new Date(selectedDate);
        }
        this.rangeSelected = 0;
    }
    highlightRange(date: Date) {
        return (date > this.dateRange.startDate && date < this.dateRange.endDate);
    }
    setYear(evt: any) {
        console.log(evt.target);
        var selectedYear = parseInt(evt.target.getAttribute('id'));
        this.date = new Date(this.date.setFullYear(selectedYear));
        this.yearView = !this.yearView;
        this.monthDays = this.generateDays(this.date);
    }
    setMonth(evt: any) {
        if (evt.target.getAttribute('id')) {
            var selectedMonth = this.settings.cal_months_labels_short.indexOf(evt.target.getAttribute('id'));
            this.date = new Date(this.date.setMonth(selectedMonth));
            this.monthsView = !this.monthsView;
            this.monthDays = this.generateDays(this.date);
        }
    }
    prevMonth(e: any) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 0) {
            this.date.setMonth(11);
            this.date.setFullYear(this.date.getFullYear() - 1);
        } else {
            var prevmonthLength = this.getMonthLength(this.date.getMonth() - 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > prevmonthLength) {
                this.date.setDate(prevmonthLength);
            }
            this.date.setMonth(this.date.getMonth() - 1);
        }
        this.date = new Date(this.date);
        this.monthDays = this.generateDays(this.date);
    }
    nextMonth(e: any) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 11) {
            this.date.setMonth(0);
            this.date.setFullYear(this.date.getFullYear() + 1);
        } else {
            var nextmonthLength = this.getMonthLength(this.date.getMonth() + 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > nextmonthLength) {
                this.date.setDate(nextmonthLength);
            }
            this.date.setMonth(this.date.getMonth() + 1);

        }
        this.date = new Date(this.date);
        this.monthDays = this.generateDays(this.date);
    }
    onChange(evt: any) {
        console.log(evt);
    }
    incHour() {
        if (this.hourValue < 12) {
            this.hourValue += 1;
            console.log(this.hourValue);
        }
    }
    decHour() {
        if (this.hourValue > 1) {
            this.hourValue -= 1;
            console.log(this.hourValue);
        }
    }
    incMinutes() {
        if (this.minValue < 59) {
            this.minValue += 1;
            console.log(this.minValue);
        }
    }
    decMinutes() {
        if (this.minValue > 0) {
            this.minValue -= 1;
            console.log(this.minValue);
        }
    }
    done() {
        this.onChangeCallback(this.date.toString());
        this.popover = false;
        this.onDateSelect.emit(this.date);
    }
    togglePopover() {
        if (this.popover) {
            this.closepopover();
        }
        else {
            this.popover = true;
        }
    }
    closepopover() {
        this.rangeSelected = 0;
        this.popover = false;
    }
    composeDate(date: Date) {
        return (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
    }
    getCurrentWeek() {
        var curr_date = new Date();

        var day = curr_date.getDay();

        var diff = curr_date.getDate() - day + (day == 0 ? -6 : 1); // 0 for sunday

        var week_start_tstmp = curr_date.setDate(diff);

        var week_start = new Date(week_start_tstmp);


        var week_end = new Date(week_start_tstmp);  // first day of week 

        week_end = new Date(week_end.setDate(week_end.getDate() + 6));


        var date = week_start + ' to ' + week_end;    // date range for current week
        console.log(date);
        if (week_start.getMonth() === week_end.getMonth()) {
            this.monthDays = this.generateDays(week_start);
            var tempDate = new Date(week_end);
            tempDate.setMonth(tempDate.getMonth() + 1);
            tempDate.setDate(1);
            this.toMonthDays = this.generateDays(tempDate);
        }
        else {
            this.monthDays = this.generateDays(week_start);
            this.toMonthDays = this.generateDays(week_end);
        }

        this.setStartDate(week_start);
        this.setEndDate(week_end);
    }
}