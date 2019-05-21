import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable, NgModule, Component, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BASE_URL = 'https://swapi.co/api';
class DatasetsLibService {
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
/** @nocollapse */ DatasetsLibService.ngInjectableDef = defineInjectable({ factory: function DatasetsLibService_Factory() { return new DatasetsLibService(inject(HttpClient)); }, token: DatasetsLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatasetsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DatasetsComponent.decorators = [
    { type: Component, args: [{
                selector: 'datasets-admin',
                template: "<h1>Datasets Admin</h1>\n<p>Form to edit datasets API-call URL</p>",
                styles: [""]
            }] }
];
/** @nocollapse */
DatasetsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatasetsLibModule {
}
DatasetsLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DatasetsComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    DatasetsComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DatasetsLibService, DatasetsComponent, DatasetsLibModule };

//# sourceMappingURL=datasets-lib.js.map