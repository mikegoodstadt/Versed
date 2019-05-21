import { __assign } from 'tslib';
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
            return __assign({ uuid: uuid }, res);
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
    /** @nocollapse */ DatasetsLibService.ngInjectableDef = defineInjectable({ factory: function DatasetsLibService_Factory() { return new DatasetsLibService(inject(HttpClient)); }, token: DatasetsLibService, providedIn: "root" });
    return DatasetsLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatasetsComponent = /** @class */ (function () {
    function DatasetsComponent() {
    }
    /**
     * @return {?}
     */
    DatasetsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DatasetsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datasets-admin',
                    template: "<h1>Datasets Admin</h1>\n<p>Form to edit datasets API-call URL</p>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DatasetsComponent.ctorParameters = function () { return []; };
    return DatasetsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatasetsLibModule = /** @class */ (function () {
    function DatasetsLibModule() {
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
    return DatasetsLibModule;
}());

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