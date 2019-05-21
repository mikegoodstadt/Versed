/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/** @type {?} */
const BASE_URL = 'https://swapi.co/api';
export class DatasetsLibService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @param {?} results
     * @return {?}
     */
    extractId(results) {
        console.log('Extracting id', results);
        return results.map((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            const uuid = res.url.split(`${this.collection}/`)[1].split('/')[0];
            return Object.assign({ uuid }, res);
        }));
    }
    /**
     * @param {?=} path
     * @return {?}
     */
    getCharacters(path) {
        console.log('Get people from SWAPI...');
        this.collection = 'people';
        return this.getData();
    }
    /**
     * @return {?}
     */
    getData() {
        /** @type {?} */
        const path = `${BASE_URL}/${this.collection}`;
        console.log('Path: ', path);
        return this.httpClient.get(path)
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.extractId(res.results))), catchError(this.handleError));
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        alert('No data returned:' + JSON.stringify(error));
        return Observable.throw(error);
    }
}
DatasetsLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DatasetsLibService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DatasetsLibService.ngInjectableDef = i0.defineInjectable({ factory: function DatasetsLibService_Factory() { return new DatasetsLibService(i0.inject(i1.HttpClient)); }, token: DatasetsLibService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldHMtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXRhc2V0cy1saWIvIiwic291cmNlcyI6WyJsaWIvZGF0YXNldHMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQVMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztNQUVsRCxRQUFRLEdBQUcsc0JBQXNCO0FBS3ZDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFHN0IsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzNCLENBQUM7Ozs7O0lBRUMsU0FBUyxDQUFDLE9BQWM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFOztrQkFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSx1QkFBUyxJQUFJLElBQUssR0FBRyxFQUFHO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBYTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLE9BQU87O2NBQ04sSUFBSSxHQUFHLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7YUFDN0IsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFDOUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXJDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSUSxVQUFVOzs7Ozs7OztJQVVuQix3Q0FBMkI7Ozs7O0lBR3ZCLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3N3YXBpLmNvL2FwaSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFzZXRzTGliU2VydmljZSB7XG5wcml2YXRlIGNvbGxlY3Rpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgKSB7fVxuXG4gIHB1YmxpYyBleHRyYWN0SWQocmVzdWx0czogYW55W10pOiBhbnkge1xuICAgIGNvbnNvbGUubG9nKCdFeHRyYWN0aW5nIGlkJywgcmVzdWx0cyk7XG4gICAgcmV0dXJuIHJlc3VsdHMubWFwKHJlcyA9PiB7XG4gICAgICBjb25zdCB1dWlkID0gcmVzLnVybC5zcGxpdChgJHt0aGlzLmNvbGxlY3Rpb259L2ApWzFdLnNwbGl0KCcvJylbMF07XG4gICAgICByZXR1cm4geyB1dWlkLCAuLi5yZXMgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGFyYWN0ZXJzKHBhdGg/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnNvbGUubG9nKCdHZXQgcGVvcGxlIGZyb20gU1dBUEkuLi4nKTtcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSAncGVvcGxlJztcbiAgICByZXR1cm4gdGhpcy5nZXREYXRhKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBhdGggPSBgJHtCQVNFX1VSTH0vJHt0aGlzLmNvbGxlY3Rpb259YDtcbiAgICBjb25zb2xlLmxvZygnUGF0aDogJywgcGF0aCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQocGF0aClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogYW55KSA9PiB0aGlzLmV4dHJhY3RJZChyZXMucmVzdWx0cykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgIGFsZXJ0KCdObyBkYXRhIHJldHVybmVkOicgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxuXG59XG4iXX0=