/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/** @type {?} */
var BASE_URL = 'https://swapi.co/api';
var DatasetsLibService = /** @class */ (function () {
    function DatasetsLibService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @param {?} results
     * @return {?}
     */
    DatasetsLibService.prototype.extractId = /**
     * @param {?} results
     * @return {?}
     */
    function (results) {
        var _this = this;
        console.log('Extracting id', results);
        return results.map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var uuid = res.url.split(_this.collection + "/")[1].split('/')[0];
            return tslib_1.__assign({ uuid: uuid }, res);
        }));
    };
    /**
     * @param {?=} path
     * @return {?}
     */
    DatasetsLibService.prototype.getCharacters = /**
     * @param {?=} path
     * @return {?}
     */
    function (path) {
        console.log('Get people from SWAPI...');
        this.collection = 'people';
        return this.getData();
    };
    /**
     * @return {?}
     */
    DatasetsLibService.prototype.getData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var path = BASE_URL + "/" + this.collection;
        console.log('Path: ', path);
        return this.httpClient.get(path)
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.extractId(res.results); })), catchError(this.handleError));
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    DatasetsLibService.prototype.handleError = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        alert('No data returned:' + JSON.stringify(error));
        return Observable.throw(error);
    };
    DatasetsLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DatasetsLibService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DatasetsLibService.ngInjectableDef = i0.defineInjectable({ factory: function DatasetsLibService_Factory() { return new DatasetsLibService(i0.inject(i1.HttpClient)); }, token: DatasetsLibService, providedIn: "root" });
    return DatasetsLibService;
}());
export { DatasetsLibService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatasetsLibService.prototype.collection;
    /**
     * @type {?}
     * @private
     */
    DatasetsLibService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldHMtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRhc2V0cy1saWIvIiwic291cmNlcyI6WyJsaWIvZGF0YXNldHMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUFFbEQsUUFBUSxHQUFHLHNCQUFzQjtBQUV2QztJQU1FLDRCQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDM0IsQ0FBQzs7Ozs7SUFFQyxzQ0FBUzs7OztJQUFoQixVQUFpQixPQUFjO1FBQS9CLGlCQU1DO1FBTEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBQ2QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFJLEtBQUksQ0FBQyxVQUFVLE1BQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsMEJBQVMsSUFBSSxNQUFBLElBQUssR0FBRyxFQUFHO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSwwQ0FBYTs7OztJQUFwQixVQUFxQixJQUFhO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sb0NBQU87OztJQUFkO1FBQUEsaUJBUUM7O1lBUE8sSUFBSSxHQUFNLFFBQVEsU0FBSSxJQUFJLENBQUMsVUFBWTtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUM3QixJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsRUFDOUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVPLHdDQUFXOzs7OztJQUFuQixVQUFvQixLQUFLO1FBQ3ZCLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXJDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLFVBQVU7Ozs2QkFEbkI7Q0E4Q0MsQUF2Q0QsSUF1Q0M7U0FwQ1ksa0JBQWtCOzs7Ozs7SUFDL0Isd0NBQTJCOzs7OztJQUd2Qix3Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9zd2FwaS5jby9hcGknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhc2V0c0xpYlNlcnZpY2Uge1xucHJpdmF0ZSBjb2xsZWN0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgICkge31cblxuICBwdWJsaWMgZXh0cmFjdElkKHJlc3VsdHM6IGFueVtdKTogYW55IHtcbiAgICBjb25zb2xlLmxvZygnRXh0cmFjdGluZyBpZCcsIHJlc3VsdHMpO1xuICAgIHJldHVybiByZXN1bHRzLm1hcChyZXMgPT4ge1xuICAgICAgY29uc3QgdXVpZCA9IHJlcy51cmwuc3BsaXQoYCR7dGhpcy5jb2xsZWN0aW9ufS9gKVsxXS5zcGxpdCgnLycpWzBdO1xuICAgICAgcmV0dXJuIHsgdXVpZCwgLi4ucmVzIH07XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hhcmFjdGVycyhwYXRoPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zb2xlLmxvZygnR2V0IHBlb3BsZSBmcm9tIFNXQVBJLi4uJyk7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gJ3Blb3BsZSc7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpO1xuICB9XG5cbiAgcHVibGljIGdldERhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXRoID0gYCR7QkFTRV9VUkx9LyR7dGhpcy5jb2xsZWN0aW9ufWA7XG4gICAgY29uc29sZS5sb2coJ1BhdGg6ICcsIHBhdGgpO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KHBhdGgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IGFueSkgPT4gdGhpcy5leHRyYWN0SWQocmVzLnJlc3VsdHMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3IpIHtcbiAgICBhbGVydCgnTm8gZGF0YSByZXR1cm5lZDonICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cblxufVxuIl19