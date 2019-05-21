(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('datasets-lib', ['exports', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common'], factory) :
    (factory((global['datasets-lib'] = {}),global.ng.common.http,global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common));
}(this, (function (exports,i1,rxjs,operators,i0,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
                return results.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
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
                    .pipe(operators.map(( /**
             * @param {?} res
             * @return {?}
             */function (res) { return _this.extractId(res.results); })), operators.catchError(this.handleError));
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
                return rxjs.Observable.throw(error);
            };
        DatasetsLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DatasetsLibService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ DatasetsLibService.ngInjectableDef = i0.defineInjectable({ factory: function DatasetsLibService_Factory() { return new DatasetsLibService(i0.inject(i1.HttpClient)); }, token: DatasetsLibService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        declarations: [
                            DatasetsComponent
                        ],
                        imports: [
                            common.CommonModule
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

    exports.DatasetsLibService = DatasetsLibService;
    exports.DatasetsComponent = DatasetsComponent;
    exports.DatasetsLibModule = DatasetsLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=datasets-lib.umd.js.map