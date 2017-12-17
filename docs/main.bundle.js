webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/adsense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdsenseComponent = /** @class */ (function () {
    function AdsenseComponent() {
        this.adconfig = {};
    }
    AdsenseComponent.prototype.ngOnInit = function () {
        this.adconfig = Object.assign(this.adconfig, this.settings);
    };
    AdsenseComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            try {
                (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
            }
            catch (e) {
                console.error("error");
            }
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AdsenseComponent.prototype, "settings", void 0);
    AdsenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'google-adsense',
            template: " <div>\n            <ins class=\"adsbygoogle\"\n                style=\"display:inline-block;width:300px;height:250px;\"\n                [attr.data-ad-client]=\"adconfig.client\"\n                [attr.data-ad-slot]=\"adconfig.slot\"></ins>\n             </div>   \n                <br>            \n      ",
        }),
        __metadata("design:paramtypes", [])
    ], AdsenseComponent);
    return AdsenseComponent;
}());

//# sourceMappingURL=adsense.component.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/clickOutside.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
    var _a;
}());

//# sourceMappingURL=clickOutside.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"winkel-calendar\" (clickOutside)=\"closepopover()\">\r\n    <span *ngIf=\"!settings.rangepicker\">\r\n    <input type=\"hidden\" class=\"wc-input\" value=\"{{date}}\">\r\n    <div class=\"wc-date-container\" (click)=\"popover = !popover\">\r\n        <span>{{date | date: settings.format}}</span>\r\n    <i class=\"fa fa-calendar\"></i>\r\n</div>\r\n</span>\r\n<div *ngIf=\"!settings.rangepicker\" class=\"wc-date-popover\" [ngClass]=\"{'banner-true': settings.bigBanner == true}\" [hidden]=\"!popover\">\r\n    <div class=\"wc-banner\" *ngIf=\"settings.bigBanner\">\r\n        <div class=\"wc-day-row\">{{date | date: 'EEEE'}}</div>\r\n        <div class=\"wc-date-row\">{{date | date: 'dd'}}</div>\r\n        <div class=\"wc-my-sec\">\r\n            <div class=\"wc-month-row\">\r\n                <div>{{date | date: 'MMMM'}}</div>\r\n            </div>\r\n            <div class=\"wc-year-row\">\r\n                <div>{{date | date: 'yyyy'}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"wc-time-sec ng-scope\" ng-click=\"toggleTimeView()\">\r\n            <div *ngIf=\"settings.timePicker\" class=\"time\" (click)=\"timeView = !timeView\">\r\n                {{date | date: 'hh'}} : {{date | date: 'mm'}} {{date | date: 'a'}} <span class=\"fa fa-clock-o\"></span>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"wc-details\">\r\n        <i class=\"wc-prev fa fa-angle-left\" (click)=\"prevMonth($event)\"></i>\r\n        <div class=\"month-year\" *ngIf=\"settings.bigBanner\" (click)=\"toggleMonthView()\">{{date | date: 'MMMM'}}\r\n            <!-- <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\"></i>\r\n                                 <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\"></i> -->\r\n        </div>\r\n        <div class=\"month-year\" *ngIf=\"!settings.bigBanner\" (click)=\"toggleMonthView()\">\r\n            {{date | date: 'MMMM'}}\r\n            <!--    <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\" (click)=\"toggleMonthView()\"></i>\r\n                                    <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\" (click)=\"toggleMonthView()\"></i>  -->\r\n\r\n        </div>\r\n        <i class=\"wc-next fa fa-angle-right\" (click)=\"nextMonth($event)\"></i>\r\n    </div>\r\n    <div class=\"year-title\">\r\n        <div class=\"year-dropdown\" (click)=\"generateYearList('current')\">\r\n            {{date | date: 'yyyy'}}\r\n            <i *ngIf=\"!yearView\" class=\"fa fa-angle-down\"></i>\r\n            <i *ngIf=\"yearView\" class=\"fa fa-angle-up\"></i>\r\n        </div>\r\n    </div>\r\n    <table class=\"calendar-header\" [hidden]=\"yearView == true || monthsView == true\">\r\n        <tr>\r\n            <td class=\"calendar-header-day\">Su</td>\r\n            <td class=\"calendar-header-day\">Mo</td>\r\n            <td class=\"calendar-header-day\">Tu</td>\r\n            <td class=\"calendar-header-day\">We</td>\r\n            <td class=\"calendar-header-day\">Th</td>\r\n            <td class=\"calendar-header-day\">Fr</td>\r\n            <td class=\"calendar-header-day\">Sa</td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"months-view\" [hidden]=\"!monthsView\" (click)=\"setMonth($event)\">\r\n        <span *ngFor=\"let month of settings.cal_months_labels_short\" [ngClass]=\"{'current-month': month == settings.cal_months_labels_short[date?.getMonth()]}\"\r\n            id=\"{{month}}\">{{month}}</span>\r\n    </div>\r\n    <div class=\"years-view\" *ngIf=\"yearView\">\r\n        <div class=\"fa fa-angle-left prev\" (click)=\"generateYearList('prev')\"></div>\r\n        <div class=\"fa fa-angle-right next\" (click)=\"generateYearList('next')\"></div>\r\n        <div class=\"years-list-view\" (click)=\"setYear($event)\">\r\n            <span *ngFor=\"let year of yearsList\" [ngClass]=\"{'current-year': year == date?.getFullYear()}\" id=\"{{year}}\">{{year}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"time-view\" [hidden]=\"!timeView\">\r\n        <div class=\"time\">\r\n            <div class=\"hour\">\r\n                <span class=\"fa fa-plus inc-btn\" (click)=\"incHour()\"></span>\r\n                <input type=\"number\" value=\"{{hourValue}}\" [(ngModel)]=\"hourValue\" autofocus/>\r\n                <span class=\"fa fa-minus dec-btn\" (click)=\"decHour()\"></span>\r\n            </div>\r\n            <div class=\"time-divider\">:</div>\r\n            <div class=\"minutes\">\r\n                <span class=\"fa fa-plus inc-btn\" (click)=\"incMinutes()\"></span>\r\n                <input type=\"number\" value=\"{{minValue}}\" [(ngModel)]=\"minValue\" />\r\n                <span class=\"fa fa-minus dec-btn\" (click)=\"decMinutes()\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"meridian\">\r\n            <div class=\"cuppa-btn-group\">\r\n                <button [ngClass]=\"{'active': timeViewMeridian == 'AM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('AM')\">AM</button>\r\n                <button [ngClass]=\"{'active': timeViewMeridian == 'PM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('PM')\">PM</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"time-view-btn\">\r\n            <button class=\"button\" (click)=\"setTimeView()\">Set Time</button>\r\n        </div>\r\n    </div>\r\n    <table class=\"calendar-days\" (click)=\"setDay($event);\" [hidden]=\"monthsView || yearView\">\r\n        <tr *ngFor=\"let week of monthDays\">\r\n            <td [ngClass]=\"{'calendar-day': day.day != null,'today': day == today.getDate() && date?.getMonth() == today.getMonth() && date?.getFullYear() == today.getFullYear(),'selected-day': day.day == date?.getDate()}\"\r\n                *ngFor=\"let day of week\">\r\n                <span [attr.data-label]=\"composeDate(day.date)\">{{day.day}}</span>\r\n            </td>\r\n\r\n        </tr>\r\n    </table>\r\n    <div class=\"cal-util\">\r\n        <div class=\"ok\" (click)=\"done()\"><i class=\"fa fa-check\"></i>Done\r\n        </div>\r\n    </div>\r\n</div>\r\n<span *ngIf=\"settings.rangepicker\">\r\n        <input type=\"hidden\" class=\"wc-input\" value=\"{{date}}\">\r\n<div class=\"range-input\" (click)=\"togglePopover()\">\r\n        <div class=\"wc-date-container\" >\r\n            <span>{{dateRange?.startDate | date: settings.format}}</span>\r\n<i class=\"fa fa-arrow-circle-o-right range-direc\"></i>\r\n</div>\r\n<div class=\"wc-date-container to-input\">\r\n    <span>{{dateRange?.endDate | date: settings.format}}</span>\r\n    <i class=\"fa fa-calendar\"></i>\r\n</div>\r\n</div>\r\n</span>\r\n<div *ngIf=\"settings.rangepicker\" class=\"range-date-popover\" [ngClass]=\"{'banner-true': settings.bigBanner == true}\" [hidden]=\"!popover\">\r\n    <div class=\"range-banner\">\r\n        <div class=\"wc-banner-col\" *ngIf=\"settings.bigBanner\">\r\n            <label>FROM</label>\r\n            <div class=\"wc-day\">\r\n                {{dateRange.startDate | date: 'dd'}}\r\n            </div>\r\n            <div class=\"wc-my\">\r\n                <div class=\"wc-month\">\r\n                    <div>\r\n                        {{dateRange.startDate | date: 'MMMM'}} {{dateRange.startDate | date: 'yyyy'}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"wc-year\">\r\n                    <span>{{dateRange.startDate | date: 'EEEE'}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"wc-banner-col arrow-right\" *ngIf=\"settings.bigBanner\">\r\n            <i class=\"fa fa-angle-right\"></i>\r\n        </div>\r\n        <div class=\"wc-banner-col\" *ngIf=\"settings.bigBanner\">\r\n            <label>TO</label>\r\n            <div class=\"wc-day\">{{dateRange.endDate | date: 'dd'}}</div>\r\n            <div class=\"wc-my\">\r\n                <div class=\"wc-month\">\r\n                    <div>\r\n                        {{dateRange.endDate | date: 'MMMM'}} {{dateRange.endDate | date: 'yyyy'}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"wc-year\">\r\n                    <span>{{dateRange.endDate | date: 'EEEE'}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"dp-left-section\">\r\n        <div class=\"wc-details\">\r\n            <i class=\"wc-prev fa fa-angle-left\" (click)=\"prevMonth($event)\"></i>\r\n            <div class=\"month-year\" *ngIf=\"settings.bigBanner\" (click)=\"toggleMonthView()\">{{dateRange.startDate | date: 'MMMM'}}\r\n                <!-- <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\"></i>\r\n                                 <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\"></i> -->\r\n            </div>\r\n            <div class=\"month-year\" *ngIf=\"!settings.bigBanner\" (click)=\"toggleMonthView()\">\r\n                {{dateRange.startDate | date: 'MMMM'}}\r\n                <!--    <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\" (click)=\"toggleMonthView()\"></i>\r\n                                    <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\" (click)=\"toggleMonthView()\"></i>  -->\r\n\r\n            </div>\r\n            <i class=\"wc-next fa fa-angle-right\" (click)=\"nextMonth($event)\"></i>\r\n        </div>\r\n        <div class=\"year-title\">\r\n            <div class=\"year-dropdown\" (click)=\"generateYearList('current')\">\r\n                {{dateRange.startDate | date: 'yyyy'}}\r\n                <i *ngIf=\"!yearView\" class=\"fa fa-angle-down\"></i>\r\n                <i *ngIf=\"yearView\" class=\"fa fa-angle-up\"></i>\r\n            </div>\r\n        </div>\r\n        <table class=\"calendar-header\" [hidden]=\"yearView == true || monthsView == true\">\r\n            <tr>\r\n                <td class=\"calendar-header-day\">Su</td>\r\n                <td class=\"calendar-header-day\">Mo</td>\r\n                <td class=\"calendar-header-day\">Tu</td>\r\n                <td class=\"calendar-header-day\">We</td>\r\n                <td class=\"calendar-header-day\">Th</td>\r\n                <td class=\"calendar-header-day\">Fr</td>\r\n                <td class=\"calendar-header-day\">Sa</td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"months-view\" [hidden]=\"!monthsView\" (click)=\"setMonth($event)\">\r\n            <span *ngFor=\"let month of settings.cal_months_labels_short\" [ngClass]=\"{'current-month': month == settings.cal_months_labels_short[dateRange.startDate?.getMonth()]}\"\r\n                id=\"{{month}}\">{{month}}</span>\r\n        </div>\r\n        <div class=\"years-view\" *ngIf=\"yearView\">\r\n            <div class=\"fa fa-angle-left prev\" (click)=\"generateYearList('prev')\"></div>\r\n            <div class=\"fa fa-angle-right next\" (click)=\"generateYearList('next')\"></div>\r\n            <div class=\"years-list-view\" (click)=\"setYear($event)\">\r\n                <span *ngFor=\"let year of yearsList\" [ngClass]=\"{'current-year': year == dateRange.startDate?.getFullYear()}\" id=\"{{year}}\">{{year}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"time-view\" [hidden]=\"!timeView\">\r\n            <div class=\"time\">\r\n                <div class=\"hour\">\r\n                    <span class=\"fa fa-plus inc-btn\" (click)=\"incHour()\"></span>\r\n                    <input type=\"number\" value=\"{{hourValue}}\" [(ngModel)]=\"hourValue\" autofocus/>\r\n                    <span class=\"fa fa-minus dec-btn\" (click)=\"decHour()\"></span>\r\n                </div>\r\n                <div class=\"time-divider\">:</div>\r\n                <div class=\"minutes\">\r\n                    <span class=\"fa fa-plus inc-btn\" (click)=\"incMinutes()\"></span>\r\n                    <input type=\"number\" value=\"{{minValue}}\" [(ngModel)]=\"minValue\" />\r\n                    <span class=\"fa fa-minus dec-btn\" (click)=\"decMinutes()\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"meridian\">\r\n                <div class=\"cuppa-btn-group\">\r\n                    <button [ngClass]=\"{'active': timeViewMeridian == 'AM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('AM')\">AM</button>\r\n                    <button [ngClass]=\"{'active': timeViewMeridian == 'PM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('PM')\">PM</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"time-view-btn\">\r\n                <button class=\"button\" (click)=\"setTimeView()\">Set Time</button>\r\n            </div>\r\n        </div>\r\n        <table class=\"calendar-days\" (click)=\"setDay($event,'range');\" [hidden]=\"monthsView || yearView\">\r\n            <tr *ngFor=\"let week of monthDays\">\r\n                <td [ngClass]=\"{'range-highlight':highlightRange(day.date),'calendar-day': day.day != null,'today': day.day == today.getDate() && dateRange.startDate?.getMonth() == today.getMonth() && dateRange.startDate?.getFullYear() == today.getFullYear(),'selected-day': day.date.toString() == dateRange.startDate.toString() || day.date.toString() == dateRange.endDate.toString()}\"\r\n                    *ngFor=\"let day of week\">\r\n                    <span [attr.data-label]=\"composeDate(day.date)\">{{day.day}}</span>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n        <div class=\"cal-util\">\r\n            <div class=\"ok\" (click)=\"done()\"><i class=\"fa fa-check\"></i>Done\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"dp-right-section\">\r\n        <div class=\"wc-details\">\r\n            <i class=\"wc-prev fa fa-angle-left\" (click)=\"prevMonth($event)\"></i>\r\n            <div class=\"month-year\" *ngIf=\"settings.bigBanner\" (click)=\"toggleMonthView()\">{{dateRange.endDate | date: 'MMMM'}}\r\n                <!-- <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\"></i>\r\n                                 <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\"></i> -->\r\n            </div>\r\n            <div class=\"month-year\" *ngIf=\"!settings.bigBanner\" (click)=\"toggleMonthView()\">\r\n                {{dateRange.endDate | date: 'MMMM'}}\r\n                <!--    <i ng-show=\"!monthsView\" class=\"fa fa-arrow-down\" (click)=\"toggleMonthView()\"></i>\r\n                                    <i ng-show=\"monthsView\" class=\"fa fa-arrow-up\" (click)=\"toggleMonthView()\"></i>  -->\r\n\r\n            </div>\r\n            <i class=\"wc-next fa fa-angle-right\" (click)=\"nextMonth($event)\"></i>\r\n        </div>\r\n        <div class=\"year-title\">\r\n            <div class=\"year-dropdown\" (click)=\"generateYearList('current')\">\r\n                {{date | date: 'yyyy'}}\r\n                <i *ngIf=\"!yearView\" class=\"fa fa-angle-down\"></i>\r\n                <i *ngIf=\"yearView\" class=\"fa fa-angle-up\"></i>\r\n            </div>\r\n        </div>\r\n        <table class=\"calendar-header\" [hidden]=\"yearView == true || monthsView == true\">\r\n            <tr>\r\n                <td class=\"calendar-header-day\">Su</td>\r\n                <td class=\"calendar-header-day\">Mo</td>\r\n                <td class=\"calendar-header-day\">Tu</td>\r\n                <td class=\"calendar-header-day\">We</td>\r\n                <td class=\"calendar-header-day\">Th</td>\r\n                <td class=\"calendar-header-day\">Fr</td>\r\n                <td class=\"calendar-header-day\">Sa</td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"months-view\" [hidden]=\"!monthsView\" (click)=\"setMonth($event)\">\r\n            <span *ngFor=\"let month of settings.cal_months_labels_short\" [ngClass]=\"{'current-month': month == settings.cal_months_labels_short[date?.getMonth()]}\"\r\n                id=\"{{month}}\">{{month}}</span>\r\n        </div>\r\n        <div class=\"years-view\" *ngIf=\"yearView\">\r\n            <div class=\"fa fa-angle-left prev\" (click)=\"generateYearList('prev')\"></div>\r\n            <div class=\"fa fa-angle-right next\" (click)=\"generateYearList('next')\"></div>\r\n            <div class=\"years-list-view\" (click)=\"setYear($event)\">\r\n                <span *ngFor=\"let year of yearsList\" [ngClass]=\"{'current-year': year == date?.getFullYear()}\" id=\"{{year}}\">{{year}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"time-view\" [hidden]=\"!timeView\">\r\n            <div class=\"time\">\r\n                <div class=\"hour\">\r\n                    <span class=\"fa fa-plus inc-btn\" (click)=\"incHour()\"></span>\r\n                    <input type=\"number\" value=\"{{hourValue}}\" [(ngModel)]=\"hourValue\" autofocus/>\r\n                    <span class=\"fa fa-minus dec-btn\" (click)=\"decHour()\"></span>\r\n                </div>\r\n                <div class=\"time-divider\">:</div>\r\n                <div class=\"minutes\">\r\n                    <span class=\"fa fa-plus inc-btn\" (click)=\"incMinutes()\"></span>\r\n                    <input type=\"number\" value=\"{{minValue}}\" [(ngModel)]=\"minValue\" />\r\n                    <span class=\"fa fa-minus dec-btn\" (click)=\"decMinutes()\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"meridian\">\r\n                <div class=\"cuppa-btn-group\">\r\n                    <button [ngClass]=\"{'active': timeViewMeridian == 'AM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('AM')\">AM</button>\r\n                    <button [ngClass]=\"{'active': timeViewMeridian == 'PM'}\" class=\"button\" ng-model=\"timeViewMeridian\" (click)=\"toggleMeridian('PM')\">PM</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"time-view-btn\">\r\n                <button class=\"button\" (click)=\"setTimeView()\">Set Time</button>\r\n            </div>\r\n        </div>\r\n        <table class=\"calendar-days\" (click)=\"setDay($event,'range');\" [hidden]=\"monthsView || yearView\">\r\n            <tr *ngFor=\"let week of toMonthDays\">\r\n                <td [ngClass]=\"{'range-highlight':highlightRange(day.date),'calendar-day': day != null,'today': day == today.getDate() && dateRange.endDate?.getMonth() == today.getMonth() && dateRange.endDate?.getFullYear() == today.getFullYear(),'selected-day': day.date.toString() == dateRange.startDate.toString() || day.date.toString() == dateRange.endDate.toString()}\"\r\n                    *ngFor=\"let day of week\">\r\n                    <span [attr.data-label]=\"composeDate(day.date)\">{{day.day}}</span>\r\n                </td>\r\n\r\n            </tr>\r\n        </table>\r\n        <div class=\"cal-util\">\r\n            <div class=\"ok\" (click)=\"done()\"><i class=\"fa fa-check\"></i>Done\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/datepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Roboto',sans-serif; }\n\n* {\n  box-sizing: border-box; }\n\n#cuppaDatePickerContainer, #cuppaDatePicker {\n  width: 250px;\n  text-align: center;\n  margin: 0px auto;\n  font-family: 'Roboto','Arial',sans-serif; }\n\n.year-dropdown {\n  text-align: center; }\n\n.calendar-header {\n  color: #333;\n  background: #fff; }\n\n.wc-date-container {\n  float: left;\n  width: 100%;\n  height: 30px;\n  border: 1px solid #1565c0;\n  margin-bottom: 1px;\n  font-size: 16px;\n  padding: 5px;\n  text-align: left;\n  cursor: pointer;\n  background: #fff;\n  line-height: 20px; }\n\n.wc-date-container > span {\n  color: #1565c0; }\n\n.wc-date-container > i {\n  float: right;\n  font-size: 20px;\n  color: #1565c0; }\n\n.winkel-calendar {\n  position: relative;\n  font-family: 'Roboto','Arial',sans-serif; }\n\n.wc-date-popover {\n  font-size: 14px;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n  margin: 0px auto;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  float: left;\n  background: #fff;\n  background: #ffffff;\n  position: fixed;\n  width: 90%;\n  top: 5%;\n  left: 50%;\n  z-index: 9999999;\n  overflow: hidden;\n  height: 90%;\n  max-width: 320px;\n  transition: all .5s linear;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.wc-banner {\n  /* background: #3ce5ed; */\n  float: left;\n  width: 100%;\n  font-size: 54px;\n  background: #1565c0; }\n\n.wc-day-row {\n  padding: 5px 0px;\n  /*background: rgba(0, 0, 0, 0.09);*/\n  color: #ffffff;\n  width: 100%;\n  float: left;\n  font-size: 3vh;\n  text-align: center; }\n\n.wc-date-row {\n  display: inline-block;\n  font-size: 25vw;\n  color: #ffffff;\n  padding: 5px;\n  width: 50%;\n  float: left;\n  text-align: right;\n  font-weight: 200; }\n\n.wc-month-row {\n  padding: 25px 0px 0px 0px;\n  font-size: 8vw;\n  color: #ffffff;\n  width: 100%;\n  float: left; }\n\n.wc-month-row > i, .wc-year-row > i {\n  float: right;\n  font-size: 12px;\n  padding: 10px 6px;\n  cursor: pointer; }\n\n.wc-month-row > i:hover, .wc-year-row > i:hover {\n  color: rgba(255, 255, 255, 0.63); }\n\n.wc-year-row {\n  text-align: left;\n  color: #ffffff;\n  font-size: 7vw;\n  float: left;\n  width: 100%;\n  padding: 2px 0px 0px 0px; }\n\n.timepicker-true .wc-year-row {\n  font-size: 20px;\n  padding: 5px 0px 0px 12px; }\n\n.timestate > .active {\n  color: #fff; }\n\n.timestate span {\n  cursor: pointer; }\n\n.wc-my-sec {\n  display: inline-block;\n  padding: 5px 10px;\n  float: left;\n  width: 50%;\n  font-weight: 300; }\n\n.timepicker-true .wc-my-sec {\n  width: 20%; }\n\n.time i {\n  font-size: 21px;\n  display: block;\n  text-align: center;\n  cursor: pointer; }\n\n.time i:hover {\n  color: rgba(255, 255, 255, 0.65); }\n\n.time > .hour, .time > .minutes {\n  float: left;\n  width: 48%;\n  text-align: center; }\n\n.wc-month-row > div:nth-child(1), .wc-year-row > div:nth-child(1) {\n  float: left;\n  text-align: left; }\n\n.wc-time-sec {\n  color: #ffffff;\n  text-align: center;\n  padding: 0px 10px 10px;\n  float: left;\n  width: 100%; }\n\n.wc-time-sec > .time {\n  font-size: 38px;\n  font-weight: 300;\n  width: 100%;\n  text-align: center;\n  float: left; }\n\n.time-divider {\n  width: 4%;\n  float: left;\n  text-align: center;\n  padding: 0px 10px; }\n\n.time-view {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n  z-index: 1;\n  top: 40px;\n  padding: 35px;\n  border-top: 1px solid #1565c0; }\n\n.time-view-btn {\n  text-align: center; }\n\n.meridian {\n  text-align: center;\n  padding: 15px 0px; }\n\n.button {\n  width: 100%;\n  padding: 10px;\n  background: #1565c0;\n  color: #fff;\n  margin: 0px auto;\n  border: 1px solid #1565c0;\n  border-radius: 3px; }\n\n.button-sm {\n  width: 50%; }\n\n.time-view .time {\n  font-size: 36px;\n  width: 100%;\n  margin: 0px auto;\n  display: inline-block;\n  padding: 5px 0px 0px 0px;\n  color: #1565c0;\n  font-weight: 300; }\n\n.time-view .time-divider {\n  padding: 16px 0; }\n\n.wc-time-sec .time input, .time-view .time input {\n  display: inline-block;\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: center;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 32px;\n  font-weight: 300;\n  padding: 0px 10px;\n  text-align: center;\n  color: #1565c0; }\n\n.inc-btn, .dec-btn {\n  font-size: 14px;\n  display: block;\n  color: #8e8e8e; }\n\n.wc-time-sec > .time > .timestate {\n  float: left;\n  padding: 0px 10px; }\n\n.show-time-picker .wc-date-row {\n  width: 33% !important; }\n\n.show-time-picker .wc-my-sec {\n  width: 22% !important; }\n\n.wc-month-controls > .fa:hover, .wc-year-controls > .fa:hover {\n  color: #fff; }\n\n.wc-details > .fa:hover {\n  color: #ccc; }\n\n.wc-month-controls {\n  padding: 5px;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.71);\n  float: right; }\n\n.wc-year-controls {\n  padding: 2px 5px 0px 5px;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.71);\n  float: right; }\n\n.wc-year-controls > .fa, .wc-month-controls > .fa {\n  cursor: pointer;\n  padding: 0px 4px; }\n\n.wc-details {\n  float: left;\n  width: 65%;\n  padding: 10px 0px 10px;\n  color: #ffffff;\n  background: #1565c0; }\n\n.banner-true > .wc-details {\n  padding: 10px 0px 10px; }\n\n.wc-prev {\n  float: left;\n  width: 25%;\n  text-align: left;\n  padding: 0px 15px;\n  cursor: pointer;\n  font-size: 35px; }\n\n.month-year {\n  float: left;\n  width: 50%;\n  font-size: 18px;\n  line-height: 35px;\n  text-align: center; }\n\n.wc-next {\n  float: right;\n  width: 25%;\n  text-align: right;\n  padding: 0px 15px;\n  cursor: pointer;\n  font-size: 35px; }\n\n.calendar-days {\n  color: #07c;\n  background: #fff; }\n\n.cal-util {\n  width: 100%;\n  float: left;\n  cursor: pointer;\n  position: absolute;\n  bottom: 0;\n  background: #fff; }\n\n.cal-util > .ok {\n  width: 100%;\n  padding: 15px;\n  border-bottom: 1px solid #d1d1d1;\n  float: left;\n  color: #1565c0;\n  font-size: 18px;\n  border-top: 1px solid #d1d1d1;\n  text-align: center; }\n\n.ok > i {\n  margin-right: 5px; }\n\n.cal-util > .cancel {\n  width: 50%;\n  float: left;\n  padding: 10px;\n  color: #1565c0;\n  font-size: 20px; }\n\n.cal-util > .ok:hover, .cal-util > .cancel:hover {\n  box-shadow: inset 0px 0px 20px #ccc; }\n\n.today > span {\n  border: 1px solid #1565c0;\n  background: none; }\n\n.selected-day > span {\n  /*background: #3ce5ed;*/\n  background: #1565c0;\n  color: #fff; }\n\n.calendar-days td {\n  cursor: pointer; }\n\n.calendar-day:hover > span {\n  background: #1565c0;\n  color: #fff; }\n\n.winkel-calendar table {\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n  border-collapse: collapse; }\n\n.winkel-calendar table td {\n  padding: 0px 0px;\n  width: calc((100%)/7);\n  text-align: center;\n  transition: all .1s linear; }\n\n.winkel-calendar table td span {\n  display: block;\n  padding: 7px;\n  margin: 0px;\n  line-height: 32px; }\n\n.calendar-header td {\n  padding: 5px 0px !important; }\n\n.months-view, .years-view {\n  background: #fff;\n  width: 100%;\n  top: 210px;\n  width: 100%;\n  height: calc(100% - 210px);\n  bottom: 0;\n  text-align: center; }\n\n.years-list-view {\n  float: left;\n  width: calc(100% - 60px);\n  height: 100%; }\n\n.months-view > span, .years-list-view > span {\n  display: inline-block;\n  width: 25%;\n  padding: 25px 0px;\n  cursor: pointer;\n  font-size: 16px; }\n\n.years-list-view > span {\n  width: 33.3333%; }\n\n.years-view > .prev, .years-view > .next {\n  float: left;\n  width: 30px;\n  padding: 85px 0px;\n  cursor: pointer;\n  font-size: 52px; }\n\n.years-view > .prev:hover, .years-view > .next:hover {\n  color: #ccc; }\n\n.years-view > .next {\n  float: right; }\n\n.current-month, .current-year {\n  color: #1565c0; }\n\n.years-view > span {\n  width: 33.3333%; }\n\n.months-view > span:hover, .years-list-view > span:hover {\n  color: #1565c0; }\n\n.banner-true {\n  padding-top: 0px !important; }\n\n.banner-true > .wc-banner {\n  margin-bottom: 0px !important; }\n\n.banner-true > .time-view {\n  height: calc(100% - 124px);\n  top: 142px; }\n\n.methods {\n  clear: left;\n  padding: 50px 0px;\n  text-align: center; }\n\n.month-year i {\n  cursor: pointer;\n  font-size: 10px; }\n\n.timepicker-true .wc-month-row {\n  font-size: 28px;\n  padding: 5px 0px 5px 15px; }\n\n.timepicker-true .wc-month-row > i, .wc-year-row > i {\n  padding: 8px 6px; }\n\n.timepicker-true .wc-my-sec {\n  padding: 16px 2px; }\n\n.timepicker-true .wc-time-sec {\n  width: 48%;\n  padding: 25px 0px;\n  margin: 0px;\n  cursor: pointer; }\n\n.timepicker-true .wc-time-sec:hover {\n  color: rgba(255, 255, 255, 0.65); }\n\n.timepicker-true .wc-time-sec > .time {\n  width: 75%;\n  cursor: pointer; }\n\n.timepicker-true .time i {\n  display: none; }\n\n.timepicker-true .time-divider {\n  padding: 0px; }\n\n.timepicker-true .timestate {\n  padding: 0px;\n  width: auto;\n  padding-top: 7px;\n  font-size: 20px;\n  font-weight: 300; }\n\n.year-title {\n  width: 35%;\n  float: left;\n  line-height: 55px;\n  font-size: 18px;\n  color: #ffffff;\n  background: #1565c0; }\n\n.year-title i {\n  float: right;\n  padding: 13px 10px 7px 0px;\n  font-size: 28px; }\n\n@media (min-width: 365px) and (max-width: 767px) {\n  .timepicker-true .wc-date-row {\n    width: 54%;\n    padding: 20px 5px 10px; }\n  .timepicker-true .wc-my-sec {\n    padding: 33px 2px 10px;\n    width: 46%; }\n  .timepicker-true .wc-time-sec {\n    width: 100%;\n    padding: 0px 0px 15px 0px; }\n  .timepicker-true .wc-time-sec > .time {\n    width: 35%;\n    float: none;\n    margin: 0px auto;\n    font-size: 42px; }\n  .timepicker-true .wc-month-row {\n    font-size: 42px;\n    padding: 5px 0px 5px 5px; }\n  .timepicker-true .wc-year-row {\n    font-size: 24px;\n    padding: 15px 0px 0px 5px; }\n  .timepicker-true .timestate {\n    font-size: 22px;\n    font-weight: 100; }\n  .months-view, .years-view {\n    top: 297px; }\n  .banner-true > .time-view {\n    top: 240px; }\n  .time-view .time {\n    font-size: 62px; }\n  .cuppa-btn-group {\n    font-size: 22px;\n    font-weight: 300; }\n  .angular-range-slider {\n    height: 5px;\n    margin: 20px auto 25px auto; }\n  .angular-range-slider div.handle {\n    width: 45px;\n    height: 45px;\n    top: -20px;\n    font-size: 26px; }\n  .time-view-btn {\n    padding: 25px 0px; }\n  .button-sm {\n    width: 80%;\n    padding: 10px;\n    font-size: 16px; }\n  .cuppa-btn-group > .button {\n    padding: 5px 15px !important; } }\n\n@media (min-width: 768px) {\n  .wc-date-popover {\n    width: 250px;\n    position: absolute;\n    top: 31px;\n    height: auto;\n    left: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  .wc-day-row {\n    padding: 5px 0px;\n    font-size: 0.25em; }\n  .wc-date-row {\n    font-size: 1em;\n    padding: 5px; }\n  .wc-my-sec {\n    padding: 5px 0px; }\n  .timepicker-true .wc-my-sec {\n    padding: 15px 3px; }\n  .wc-month-row {\n    padding: 10px 0px 0px 0px;\n    font-size: 0.4em; }\n  .wc-year-row {\n    font-size: 0.3em;\n    padding: 0px; }\n  .month-year {\n    font-size: 14px;\n    line-height: 20px;\n    cursor: pointer; }\n  .wc-prev, .wc-next {\n    font-size: 18px; }\n  .wc-details {\n    padding: 10px 0px 10px; }\n  .year-title {\n    line-height: 40px;\n    font-size: 16px; }\n  .year-title i {\n    padding: 11px 10px 10px 0px;\n    font-size: 18px; }\n  .calendar-header td {\n    padding: 5px 0px !important; }\n  .winkel-calendar table {\n    font-size: 14px; }\n  .winkel-calendar table td span {\n    line-height: 24px;\n    width: 35px;\n    height: 35px; }\n  .months-view, .years-view {\n    top: 40px;\n    width: 100%;\n    height: calc(100%); }\n  .banner-true .months-view, .banner-true .years-view {\n    top: 165px;\n    height: calc(100% - 128px); }\n  .winkel-calendar table td span {\n    padding: 6px; }\n  .cal-util > .ok {\n    font-size: 14px;\n    padding: 10px; }\n  .wc-time-sec > .time {\n    font-size: 0.35em; }\n  .time i {\n    font-size: 10px; }\n  .wc-time-sec > .timestate {\n    font-size: 16px; }\n  .wc-month-row > div:nth-child(1), .wc-year-row > div:nth-child(1) {\n    min-width: 35px; }\n  .wc-month-row > i, .wc-year-row > i {\n    font-size: 8px; }\n  .cal-util {\n    position: relative; }\n  .banner-true > .time-view {\n    top: 159px; }\n  .timepicker-true .wc-month-row {\n    padding: 6px 0px 0px 0px;\n    font-size: 18px; }\n  .timepicker-true .wc-year-row {\n    padding: 0px 0px 0px 0px;\n    font-size: 16px; } }\n\n.time-view h5 {\n  text-align: left;\n  width: 80%;\n  margin: 0px auto;\n  padding: 5px 0px;\n  font-weight: 400; }\n\n.cuppa-btn-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.cuppa-btn-group > .active {\n  background: #1565c0 !important;\n  color: #fff !important; }\n\n.cuppa-btn-group > .button {\n  border: 1px solid #1565c0;\n  background: #fff;\n  border-radius: 3px;\n  float: left;\n  margin: 0px;\n  -webkit-box-align: initial;\n      -ms-flex-align: initial;\n          align-items: initial;\n  color: #1565c0;\n  width: auto;\n  padding: 5px 10px; }\n\n.cuppa-btn-group > .button:first-child {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-right: 0px; }\n\n.cuppa-btn-group > .button:last-child {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n/* Slider CSS*/\n.slider {\n  width: 200px;\n  height: 5px;\n  background: #ccc;\n  border-radius: 5px;\n  margin: 12px auto;\n  position: relative; }\n\n.slider > .circle {\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  position: absolute;\n  top: -8px;\n  border-radius: 20px;\n  left: 60px;\n  box-shadow: 0px 0px 5px #ccc;\n  cursor: pointer; }\n\ninput[type='number'] {\n  -moz-appearance: textfield; }\n\n/* Webkit browsers like Safari and Chrome */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\n.range-highlight {\n  background: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATEPICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("../../../../../src/app/angular2-datetimepicker/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__("../../../../../src/app/angular2-datetimepicker/interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return DatePicker; }),
    multi: true
};
var DatePicker = /** @class */ (function () {
    function DatePicker() {
        this.onDateSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dateRange = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* DateRange */]();
        this.popover = false;
        this.cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.timeViewDate = new Date(this.date);
        this.hourValue = 0;
        this.toHourValue = 0;
        this.minValue = 0;
        this.toMinValue = 0;
        this.timeViewMeridian = "";
        this.toTimeViewMeridian = "";
        this.timeView = false;
        this.yearView = false;
        this.yearsList = [];
        this.monthDays = [];
        this.toMonthDays = [];
        this.monthsView = false;
        this.today = new Date();
        this.defaultSettings = {
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
        };
        /***
         * (ssd > endDay -> startDay = endDay -> step = 1 ) && (sed > startDay -> 2)
         * (ssd < endDay -> startDay = ssd - step =1) && (sed < startDay -> 2 )
         *
         */
        this.rangeSelected = 0;
    }
    DatePicker.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        if (this.settings.defaultOpen) {
            this.popover = true;
        }
    };
    DatePicker.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            if (!this.settings.rangepicker) {
                this.initDate(value);
                this.monthDays = this.generateDays(this.date);
            }
            else {
                this.initDateRange(value);
                this.monthDays = this.generateDays(this.dateRange.startDate);
                this.toMonthDays = this.generateDays(this.dateRange.endDate);
                console.log(this.monthDays);
            }
        }
        else {
            this.date = new Date();
        }
    };
    DatePicker.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePicker.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePicker.prototype.initDate = function (val) {
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
    };
    DatePicker.prototype.initDateRange = function (val) {
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
    };
    DatePicker.prototype.generateDays = function (date) {
        var year = date.getFullYear(), month = date.getMonth(), current_day = date.getDate(), today = new Date();
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
            }
            else {
                dateArr.push(dateRow);
            }
        }
        return dateArr;
    };
    DatePicker.prototype.generateYearList = function (param) {
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
    };
    DatePicker.prototype.getMonthLength = function (month, year) {
        var monthLength = this.cal_days_in_month[month];
        // compensate for leap year
        if (month == 1) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                monthLength = 29;
            }
        }
        return monthLength;
    };
    DatePicker.prototype.toggleMonthView = function () {
        this.yearView = false;
        this.monthsView = !this.monthsView;
    };
    DatePicker.prototype.toggleMeridian = function (val) {
        this.timeViewMeridian = val;
    };
    DatePicker.prototype.setTimeView = function () {
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
    };
    DatePicker.prototype.setDay = function (evt, type) {
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
                //  this.date = new Date(selectedDay);
                // this.onChangeCallback(this.date.toString());
            }
            if (this.settings.closeOnSelect) {
                this.popover = false;
                this.onDateSelect.emit(this.date);
            }
        }
    };
    DatePicker.prototype.setStartDate = function (selectedDate) {
        if (selectedDate < this.dateRange.endDate) {
            this.dateRange.startDate = new Date(selectedDate);
        }
        else if (selectedDate > this.dateRange.endDate) {
            this.dateRange.startDate = new Date(selectedDate);
            this.dateRange.endDate = new Date(selectedDate);
        }
        this.rangeSelected = 1;
    };
    DatePicker.prototype.setEndDate = function (selectedDate) {
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
    };
    DatePicker.prototype.highlightRange = function (date) {
        return (date > this.dateRange.startDate && date < this.dateRange.endDate);
    };
    DatePicker.prototype.setYear = function (evt) {
        console.log(evt.target);
        var selectedYear = parseInt(evt.target.getAttribute('id'));
        this.date = new Date(this.date.setFullYear(selectedYear));
        this.yearView = !this.yearView;
        this.monthDays = this.generateDays(this.date);
    };
    DatePicker.prototype.setMonth = function (evt) {
        if (evt.target.getAttribute('id')) {
            var selectedMonth = this.settings.cal_months_labels_short.indexOf(evt.target.getAttribute('id'));
            this.date = new Date(this.date.setMonth(selectedMonth));
            this.monthsView = !this.monthsView;
            this.monthDays = this.generateDays(this.date);
        }
    };
    DatePicker.prototype.prevMonth = function (e) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 0) {
            this.date.setMonth(11);
            this.date.setFullYear(this.date.getFullYear() - 1);
        }
        else {
            var prevmonthLength = this.getMonthLength(this.date.getMonth() - 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > prevmonthLength) {
                this.date.setDate(prevmonthLength);
            }
            this.date.setMonth(this.date.getMonth() - 1);
        }
        this.date = new Date(this.date);
        this.monthDays = this.generateDays(this.date);
    };
    DatePicker.prototype.nextMonth = function (e) {
        e.stopPropagation();
        var self = this;
        if (this.date.getMonth() == 11) {
            this.date.setMonth(0);
            this.date.setFullYear(this.date.getFullYear() + 1);
        }
        else {
            var nextmonthLength = this.getMonthLength(this.date.getMonth() + 1, this.date.getFullYear());
            var currentDate = this.date.getDate();
            if (currentDate > nextmonthLength) {
                this.date.setDate(nextmonthLength);
            }
            this.date.setMonth(this.date.getMonth() + 1);
        }
        this.date = new Date(this.date);
        this.monthDays = this.generateDays(this.date);
    };
    DatePicker.prototype.onChange = function (evt) {
        console.log(evt);
    };
    DatePicker.prototype.incHour = function () {
        if (this.hourValue < 12) {
            this.hourValue += 1;
            console.log(this.hourValue);
        }
    };
    DatePicker.prototype.decHour = function () {
        if (this.hourValue > 1) {
            this.hourValue -= 1;
            console.log(this.hourValue);
        }
    };
    DatePicker.prototype.incMinutes = function () {
        if (this.minValue < 59) {
            this.minValue += 1;
            console.log(this.minValue);
        }
    };
    DatePicker.prototype.decMinutes = function () {
        if (this.minValue > 0) {
            this.minValue -= 1;
            console.log(this.minValue);
        }
    };
    DatePicker.prototype.done = function () {
        this.onChangeCallback(this.date.toString());
        this.popover = false;
        this.onDateSelect.emit(this.date);
    };
    DatePicker.prototype.togglePopover = function () {
        if (this.popover) {
            this.closepopover();
        }
        else {
            this.popover = true;
        }
    };
    DatePicker.prototype.closepopover = function () {
        this.rangeSelected = 0;
        this.popover = false;
    };
    DatePicker.prototype.composeDate = function (date) {
        return (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__interface__["Settings"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interface__["Settings"]) === "function" && _a || Object)
    ], DatePicker.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
    ], DatePicker.prototype, "onDateSelect", void 0);
    DatePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'angular2-date-picker',
            template: __webpack_require__("../../../../../src/app/angular2-datetimepicker/datepicker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/angular2-datetimepicker/datepicker.component.scss"), __webpack_require__("../../../../../src/app/angular2-datetimepicker/rangepicker.scss")],
            providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [])
    ], DatePicker);
    return DatePicker;
    var _a, _b;
}());

//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/datepicker.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularDateTimePickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datepicker_component__ = __webpack_require__("../../../../../src/app/angular2-datetimepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clickOutside__ = __webpack_require__("../../../../../src/app/angular2-datetimepicker/clickOutside.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AngularDateTimePickerModule = /** @class */ (function () {
    function AngularDateTimePickerModule() {
    }
    AngularDateTimePickerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__datepicker_component__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__datepicker_component__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */]]
        })
    ], AngularDateTimePickerModule);
    return AngularDateTimePickerModule;
}());

//# sourceMappingURL=datepicker.module.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateRange; });
var DateRange = /** @class */ (function () {
    function DateRange() {
    }
    return DateRange;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/angular2-datetimepicker/rangepicker.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".range-banner {\n  background: #ffffff;\n  width: 100%;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  padding: 25px 15px 10px 15px; }\n\n.range-input {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-width: 275px; }\n\n.wc-date-container {\n  position: relative; }\n\n.range-direc {\n  position: absolute;\n  right: -8px;\n  background: #fff;\n  z-index: 1;\n  color: #ccc !important;\n  font-size: 16px !important;\n  top: 6px; }\n\n.to-input {\n  padding-left: 15px; }\n\n.arrow-right {\n  padding: 0px 20px; }\n\n.arrow-right .fa {\n  font-size: 2em;\n  color: #1565c0; }\n\n.wc-banner-col {\n  /*flex-grow: 1;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: #1565c0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative; }\n\n.wc-banner-col label {\n  width: 100%;\n  text-align: left;\n  margin: 0px;\n  position: absolute;\n  top: -10px;\n  color: #888888; }\n\n.wc-day {\n  font-size: 3em;\n  font-weight: 300;\n  padding-right: 5px; }\n\n.wc-my {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.wc-month {\n  font-size: 1.2em;\n  margin-top: -5px;\n  color: #888888; }\n\n.wc-year {\n  font-size: 0.9em;\n  font-weight: 300;\n  margin-top: -1px;\n  color: #6e6e6e; }\n\n.dp-left-section, .dp-right-section {\n  border-top: 1px solid #fff; }\n\n.dp-left-section {\n  border-right: 1px solid #ccc; }\n\n.range-date-popover {\n  border: 1px solid #1565c0; }\n\n@media (min-width: 768px) {\n  .range-banner .wc-banner {\n    width: 30%; }\n  .range-date-popover {\n    width: 500px;\n    position: absolute;\n    top: 31px;\n    height: auto;\n    left: 0;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  .dp-left-section, .dp-right-section {\n    float: left;\n    width: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left-sidebar, .right-sidebar {\r\n    width: 330px;\r\n    max-width: 330px;\r\n    min-width: 330px;\r\n}\r\n.outer-wrapper {\r\n    padding: 30px;\r\n}\r\n.center-content{\r\n    background: #ffffff;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: 3px;\r\n    padding: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3 left-sidebar\">\n      <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item list-group-item-action disabled\">\n    Examples\n  </a>\n        <a [routerLink]=\"['datepicker']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Date picker</a>\n        <a [routerLink]=\"['datetimepicker']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Date Time picker</a>\n        <a [routerLink]=\"['rangepicker']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Range picker</a>\n        <a [routerLink]=\"['simpledatepicker']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Simple</a>\n        <a [routerLink]=\"['usinginform']\" routerLinkActive=\"active\" href=\"#\" class=\"list-group-item list-group-item-action\">Using with forms</a>\n      </div>\n    </div>\n    <div class=\"col center-content\">\n      <router-outlet></router-outlet>\n    </div>\n</div>   \n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy',
            defaultOpen: true
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../../src/app/appstyles.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular2_datetimepicker_datepicker_module__ = __webpack_require__("../../../../../src/app/angular2-datetimepicker/datepicker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adsense_component__ = __webpack_require__("../../../../../src/app/adsense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_datepicker__ = __webpack_require__("../../../../../src/app/examples/datepicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_datetimepicker__ = __webpack_require__("../../../../../src/app/examples/datetimepicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examples_simpledatepicker__ = __webpack_require__("../../../../../src/app/examples/simpledatepicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_usingWithForms__ = __webpack_require__("../../../../../src/app/examples/usingWithForms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_rangepicker__ = __webpack_require__("../../../../../src/app/examples/rangepicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__adsense_component__["a" /* AdsenseComponent */],
                __WEBPACK_IMPORTED_MODULE_6__examples_datepicker__["a" /* DatePickerExample */],
                __WEBPACK_IMPORTED_MODULE_7__examples_datetimepicker__["a" /* DateTimePickerExample */],
                __WEBPACK_IMPORTED_MODULE_8__examples_simpledatepicker__["a" /* SimpleDatePickerExample */],
                __WEBPACK_IMPORTED_MODULE_9__examples_usingWithForms__["a" /* UsingWithFormExample */],
                __WEBPACK_IMPORTED_MODULE_10__examples_rangepicker__["a" /* DateRangePickerExample */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular2_datetimepicker_datepicker_module__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_router__["a" /* AppRouterModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_datepicker__ = __webpack_require__("../../../../../src/app/examples/datepicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_datetimepicker__ = __webpack_require__("../../../../../src/app/examples/datetimepicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_simpledatepicker__ = __webpack_require__("../../../../../src/app/examples/simpledatepicker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_usingWithForms__ = __webpack_require__("../../../../../src/app/examples/usingWithForms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_rangepicker__ = __webpack_require__("../../../../../src/app/examples/rangepicker.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/datepicker', pathMatch: 'full' },
    { path: 'datepicker', component: __WEBPACK_IMPORTED_MODULE_2__examples_datepicker__["a" /* DatePickerExample */] },
    { path: 'datetimepicker', component: __WEBPACK_IMPORTED_MODULE_3__examples_datetimepicker__["a" /* DateTimePickerExample */] },
    { path: 'simpledatepicker', component: __WEBPACK_IMPORTED_MODULE_4__examples_simpledatepicker__["a" /* SimpleDatePickerExample */] },
    { path: 'usinginform', component: __WEBPACK_IMPORTED_MODULE_5__examples_usingWithForms__["a" /* UsingWithFormExample */] },
    { path: 'rangepicker', component: __WEBPACK_IMPORTED_MODULE_6__examples_rangepicker__["a" /* DateRangePickerExample */] }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());

//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/appstyles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/datepicker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePickerExample = /** @class */ (function () {
    function DatePickerExample() {
        this.date = '04-18-1990';
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: true,
            closeOnSelect: false,
            rangepicker: false
        };
        this.title = "Basic Example";
    }
    DatePickerExample.prototype.onDateSelect = function (date) {
        console.log(date);
    };
    DatePickerExample.prototype.ngOnInit = function () {
    };
    DatePickerExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/views/basic.html")
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerExample);
    return DatePickerExample;
}());

//# sourceMappingURL=datepicker.js.map

/***/ }),

/***/ "../../../../../src/app/examples/datetimepicker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateTimePickerExample = /** @class */ (function () {
    function DateTimePickerExample() {
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy hh:mm',
            defaultOpen: true
        };
    }
    DateTimePickerExample.prototype.ngOnInit = function () {
    };
    DateTimePickerExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n            <angular2-date-picker [(ngModel)]=\"date\" [settings]=\"settings\"></angular2-date-picker>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], DateTimePickerExample);
    return DateTimePickerExample;
}());

//# sourceMappingURL=datetimepicker.js.map

/***/ }),

/***/ "../../../../../src/app/examples/rangepicker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateRangePickerExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateRangePickerExample = /** @class */ (function () {
    function DateRangePickerExample() {
        this.date = { startDate: new Date('04-18-1990'), endDate: new Date('10-20-2017') };
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: true,
            closeOnSelect: false,
            rangepicker: true
        };
        this.title = "Basic Example";
    }
    DateRangePickerExample.prototype.onDateSelect = function (date) {
        console.log(date);
    };
    DateRangePickerExample.prototype.ngOnInit = function () {
    };
    DateRangePickerExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/views/rangepicker.html")
        }),
        __metadata("design:paramtypes", [])
    ], DateRangePickerExample);
    return DateRangePickerExample;
}());

//# sourceMappingURL=rangepicker.js.map

/***/ }),

/***/ "../../../../../src/app/examples/simpledatepicker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDatePickerExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleDatePickerExample = /** @class */ (function () {
    function SimpleDatePickerExample() {
        this.date = new Date();
        this.settings = {
            bigBanner: false,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: true
        };
    }
    SimpleDatePickerExample.prototype.ngOnInit = function () {
    };
    SimpleDatePickerExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "\n            <angular2-date-picker [(ngModel)]=\"date\" [settings]=\"settings\"></angular2-date-picker>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SimpleDatePickerExample);
    return SimpleDatePickerExample;
}());

//# sourceMappingURL=simpledatepicker.js.map

/***/ }),

/***/ "../../../../../src/app/examples/usingWithForms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingWithFormExample; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsingWithFormExample = /** @class */ (function () {
    function UsingWithFormExample() {
        this.formModel = {
            name: '',
            dob: new Date(),
        };
        this.dobSettings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MM-yyyy',
            defaultOpen: true,
            closeOnSelect: true,
            rangepicker: false
        };
        this.submitted = false;
    }
    UsingWithFormExample.prototype.onDateSelect = function (date) {
        console.log(date);
    };
    UsingWithFormExample.prototype.ngOnInit = function () {
    };
    UsingWithFormExample.prototype.onSubmit = function () { this.submitted = true; };
    UsingWithFormExample = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/views/usingwithforms.html")
        }),
        __metadata("design:paramtypes", [])
    ], UsingWithFormExample);
    return UsingWithFormExample;
}());

//# sourceMappingURL=usingWithForms.js.map

/***/ }),

/***/ "../../../../../src/app/examples/views/basic.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n    <angular2-date-picker [(ngModel)]=\"date\" [settings]=\"settings\" (onDateSelect)=\"onDateSelect($event)\"></angular2-date-picker>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/views/rangepicker.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n    <div class=\"alert alert-danger\" role=\"alert\">\r\n Date Rangepicker is still under development. Please stay tuned for updates !! Thank you for visiting.\r\n</div>\r\n<div class=\"col-md-6 mr-auto ml-auto dropdown-container\">\r\n\r\n    <angular2-date-picker [(ngModel)]=\"date\" [settings]=\"settings\" (onDateSelect)=\"onDateSelect($event)\"></angular2-date-picker>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/views/usingwithforms.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"example-title\">{{title}}</h2>\r\n<div class=\"row\">\r\n<div class=\"col-md-12 ml-auto mr-auto\">\r\n    <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" style=\"border: 1px solid #ccc; padding: 10px;\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" pattern=\"[a-zA-Z][a-zA-Z ]+\" [(ngModel)]=\"formModel.name\" name=\"name\"\r\n                #name=\"ngModel\">\r\n            <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!name.hasError('required')\">Name is required</div>\r\n                <div [hidden]=\"!name.hasError('pattern')\">Only alphabetsallowed</div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">DOB</label>\r\n            <span style=\"color: red;float: right;\">* required</span>\r\n            <angular2-date-picker [(ngModel)]=\"formModel.dob\" \r\n                                  [settings]=\"dobSettings\" \r\n                                  (onDateSelect)=\"onDateSelect($event)\" name=\"skills\" #dob=\"ngModel\">\r\n            </angular2-date-picker>\r\n<!--            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.hasError('required')\">Email is required</div>\r\n                <div [hidden]=\"!email.hasError('pattern')\">Email format should be <small><b>joe@abc.com</b></small></div>\r\n            </div>-->\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!loginForm.form.valid\">Submit</button>\r\n    </form>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map