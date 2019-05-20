(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('characters-lib', ['exports', '@angular/core'], factory) :
    (factory((global['characters-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CharactersLibService = /** @class */ (function () {
        function CharactersLibService() {
        }
        CharactersLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CharactersLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ CharactersLibService.ngInjectableDef = i0.defineInjectable({ factory: function CharactersLibService_Factory() { return new CharactersLibService(); }, token: CharactersLibService, providedIn: "root" });
        return CharactersLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CharactersHomeComponent = /** @class */ (function () {
        function CharactersHomeComponent() {
        }
        /**
         * @return {?}
         */
        CharactersHomeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CharactersHomeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'versed-characters',
                        template: "<p>works</p>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CharactersHomeComponent.ctorParameters = function () { return []; };
        return CharactersHomeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CharactersLibModule = /** @class */ (function () {
        function CharactersLibModule() {
        }
        CharactersLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            CharactersHomeComponent
                        ],
                        imports: [],
                        exports: [
                            CharactersHomeComponent
                        ]
                    },] }
        ];
        return CharactersLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CharactersLibService = CharactersLibService;
    exports.CharactersHomeComponent = CharactersHomeComponent;
    exports.CharactersLibModule = CharactersLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=characters-lib.umd.js.map