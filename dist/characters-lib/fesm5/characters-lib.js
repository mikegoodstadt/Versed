import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CharactersLibService = /** @class */ (function () {
    function CharactersLibService() {
    }
    CharactersLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CharactersLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ CharactersLibService.ngInjectableDef = defineInjectable({ factory: function CharactersLibService_Factory() { return new CharactersLibService(); }, token: CharactersLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { CharactersLibService, CharactersHomeComponent, CharactersLibModule };

//# sourceMappingURL=characters-lib.js.map