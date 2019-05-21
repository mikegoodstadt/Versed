/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { v5 as url2id } from 'uuid';
import * as i0 from "@angular/core";
/*
 * Adapted from https://stackoverflow.com/a/55365334/1667410
 */
var UuidService = /** @class */ (function () {
    function UuidService() {
        this.idCache = [];
    }
    /**
     * @param {?=} url
     * @return {?}
     */
    UuidService.prototype.generate = /**
     * @param {?=} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var isUnique = false;
        /** @type {?} */
        var tempId = '';
        if (url) {
            tempId = url2id(url, url2id.URL);
        }
        else {
            tempId = uuid();
        }
        while (!isUnique) {
            if (!this.idExists(tempId)) {
                isUnique = true;
            }
        }
        // console.log(this.idCache);
        return tempId;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UuidService.prototype.cache = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.idCache.push(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UuidService.prototype.release = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var index = this.idCache.indexOf(id);
        this.idCache.splice(index, 1);
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    UuidService.prototype.idExists = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.idCache.includes(id);
    };
    UuidService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UuidService.ctorParameters = function () { return []; };
    /** @nocollapse */ UuidService.ngInjectableDef = i0.defineInjectable({ factory: function UuidService_Factory() { return new UuidService(); }, token: UuidService, providedIn: "root" });
    return UuidService;
}());
export { UuidService };
if (false) {
    /** @type {?} */
    UuidService.prototype.idCache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi91dWlkL3V1aWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFNcEM7SUFNRTtRQUZPLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFFZixDQUFDOzs7OztJQUVULDhCQUFROzs7O0lBQWYsVUFBZ0IsR0FBUzs7WUFDbkIsUUFBUSxHQUFHLEtBQUs7O1lBQ2hCLE1BQU0sR0FBRyxFQUFFO1FBRWYsSUFBSSxHQUFHLEVBQUU7WUFDUCxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtRQUVELE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDakI7U0FDRjtRQUNELDZCQUE2QjtRQUM3QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLDJCQUFLOzs7O0lBQVosVUFBYSxFQUFVO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sNkJBQU87Ozs7SUFBZCxVQUFlLEVBQVU7O1lBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVPLDhCQUFROzs7OztJQUFoQixVQUFpQixFQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBdENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3NCQVZEO0NBZ0RDLEFBeENELElBd0NDO1NBckNZLFdBQVc7OztJQUN0Qiw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB2NSBhcyB1cmwyaWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IFVybCB9IGZyb20gJ3VybCc7XG5cbi8qXG4gKiBBZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU1MzY1MzM0LzE2Njc0MTBcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFV1aWRTZXJ2aWNlIHtcbiAgcHVibGljIGlkQ2FjaGU6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBnZW5lcmF0ZSh1cmw/OiBVcmwpOiBzdHJpbmcge1xuICAgIGxldCBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgIGxldCB0ZW1wSWQgPSAnJztcblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHRlbXBJZCA9IHVybDJpZCh1cmwsIHVybDJpZC5VUkwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wSWQgPSB1dWlkKCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKCFpc1VuaXF1ZSkge1xuICAgICAgaWYgKCF0aGlzLmlkRXhpc3RzKHRlbXBJZCkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlkQ2FjaGUpO1xuICAgIHJldHVybiB0ZW1wSWQ7XG4gIH1cblxuICBwdWJsaWMgY2FjaGUoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaWRDYWNoZS5wdXNoKGlkKTtcbiAgfVxuXG4gIHB1YmxpYyByZWxlYXNlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaWRDYWNoZS5pbmRleE9mKGlkKTtcbiAgICB0aGlzLmlkQ2FjaGUuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgaWRFeGlzdHMoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlkQ2FjaGUuaW5jbHVkZXMoaWQpO1xuICB9XG5cbn1cbiJdfQ==