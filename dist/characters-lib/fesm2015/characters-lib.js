import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CharactersLibService {
    constructor() { }
}
CharactersLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CharactersLibService.ctorParameters = () => [];
/** @nocollapse */ CharactersLibService.ngInjectableDef = defineInjectable({ factory: function CharactersLibService_Factory() { return new CharactersLibService(); }, token: CharactersLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CharactersHomeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CharactersHomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'versed-characters',
                template: "<p>works</p>",
                styles: [""]
            }] }
];
/** @nocollapse */
CharactersHomeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CharactersLibModule {
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