import { DatasetsLibService } from 'datasets-lib';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, NgModule, Component, Input, APP_INITIALIZER, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService, WebStorageModule } from 'ngx-store';
import { UuidService, SharedLibModule } from 'shared-lib';
import { FormsLibModule } from 'forms-lib';
import { Breakpoints, BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Character {
    constructor() {
        this.uuid = null;
        this.name = 'Default Character';
        this.dob = 123;
        this.species = 'Human';
        this.category = ['General'];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CharactersLibService {
    /**
     * @param {?} localStorageService
     * @param {?} uuidService
     * @param {?} datasetService
     */
    constructor(localStorageService, uuidService, datasetService) {
        this.localStorageService = localStorageService;
        this.uuidService = uuidService;
        this.datasetService = datasetService;
        this.initialized = false;
        this.charactersStream = new BehaviorSubject(null);
        this.currentStream = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    get characters() {
        return this.charactersStream.asObservable();
    }
    /**
     * @private
     * @param {?} charactersArray
     * @return {?}
     */
    setCharacters(charactersArray) {
        this.charactersStream.next(charactersArray);
        this.localStorageService.set('characters', charactersArray);
    }
    /**
     * @param {?=} character
     * @return {?}
     */
    getCharacter(character) {
        if (!character) {
            return this.charactersStream.pipe(map((/**
             * @param {?} chrs
             * @return {?}
             */
            chrs => chrs[0])));
        }
        return this.charactersStream.pipe(map((/**
         * @param {?} chrs
         * @return {?}
         */
        chrs => chrs.find((/**
         * @param {?} chr
         * @return {?}
         */
        chr => chr.uuid === character.uuid)))));
    }
    /**
     * @param {?} uuid
     * @return {?}
     */
    getCharacterById(uuid) {
        return this.charactersStream.pipe(map((/**
         * @param {?} chrs
         * @return {?}
         */
        chrs => chrs.find((/**
         * @param {?} chr
         * @return {?}
         */
        chr => chr.uuid === uuid)))));
    }
    /**
     * @return {?}
     */
    get current() {
        return this.currentStream.asObservable();
    }
    /**
     * @param {?} character
     * @return {?}
     */
    setCurrent(character) {
        this.currentStream.next(character);
        this.localStorageService.set('currentCharacter', character);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    init() {
        if (!this.initialized) {
            this.loadCharacters();
            this.initialized = true;
        }
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            resolve(this.initialized);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    loadCharacters() {
        /** @type {?} */
        const charactersObs = this.datasetService.getCharacters();
        /** @type {?} */
        let chrArray;
        charactersObs.subscribe((/**
         * @param {?} chrs
         * @return {?}
         */
        chrs => {
            chrArray = chrs;
            console.log(chrArray);
            this.setCharacters(chrArray);
            this.loadCurrent();
            console.log('Characters loaded from SwAPI.co!');
        }));
    }
    /**
     * @private
     * @return {?}
     */
    loadCurrent() {
        /** @type {?} */
        let chr = this.localStorageService.get('current');
        if (!chr) {
            console.log('No current character in LocalStorage.');
            this.characters.subscribe((/**
             * @param {?} chrs
             * @return {?}
             */
            chrs => chr = chrs[0]));
        }
        this.setCurrent(chr);
        console.log('Current set to: ', chr.title);
    }
    /**
     * @return {?}
     */
    createCharacter() {
        /** @type {?} */
        const chr = new Character();
        chr.uuid = this.uuidService.generate();
        return chr;
    }
    /**
     * @param {?} charactersArray
     * @return {?}
     */
    addCharacters(charactersArray) {
        console.log('adding chrs: ', charactersArray);
        for (const chr of charactersArray) {
            this.uuidService.cache(chr.uuid);
        }
        this.setCharacters(charactersArray);
    }
    /**
     * @param {?} character
     * @return {?}
     */
    addCharacter(character) {
        this.uuidService.cache(character.uuid);
        /** @type {?} */
        const charactersArray = [...this.charactersStream.getValue(), character];
        this.setCharacters(charactersArray);
    }
    /**
     * @param {?} character
     * @return {?}
     */
    updateCharacter(character) {
        /** @type {?} */
        const charactersArray = [...this.charactersStream.getValue()];
        /** @type {?} */
        const index = charactersArray.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.uuid === character.uuid));
        charactersArray.splice(index, 1, character);
        this.setCharacters(charactersArray);
    }
    /**
     * @param {?} character
     * @return {?}
     */
    deleteCharacter(character) {
        /** @type {?} */
        const charactersArray = this.charactersStream.getValue().filter((/**
         * @param {?} chr
         * @return {?}
         */
        chr => chr.uuid !== character.uuid));
        this.uuidService.release(character.uuid);
        // If deleting character leaves Characters empty, create and add new default character.
        if (!charactersArray.length) {
            /** @type {?} */
            const chr = this.createCharacter();
            charactersArray.push(chr);
        }
        this.setCharacters(charactersArray);
        // If current, set to first in characters list.
        /** @type {?} */
        let currentUuid;
        this.current.subscribe((/**
         * @param {?} curr
         * @return {?}
         */
        curr => currentUuid = curr.uuid));
        if (character.uuid === currentUuid) {
            /** @type {?} */
            let chr;
            this.characters.subscribe((/**
             * @param {?} chrs
             * @return {?}
             */
            chrs => chr = chrs[0]));
            this.setCurrent(chr);
        }
    }
}
CharactersLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CharactersLibService.ctorParameters = () => [
    { type: LocalStorageService },
    { type: UuidService },
    { type: DatasetsLibService }
];
/** @nocollapse */ CharactersLibService.ngInjectableDef = defineInjectable({ factory: function CharactersLibService_Factory() { return new CharactersLibService(inject(LocalStorageService), inject(UuidService), inject(DatasetsLibService)); }, token: CharactersLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CharactersHomeComponent {
    /**
     * @param {?} charactersService
     */
    constructor(charactersService) {
        this.charactersService = charactersService;
        this.characters = this.charactersService.characters;
        this._current = this.charactersService.current;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    get current() {
        return this._current;
    }
    /**
     * @param {?} character
     * @return {?}
     */
    set current(character) {
        this.charactersService.setCurrent(character);
    }
}
CharactersHomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'characters-home',
                template: "<characters-collection></characters-collection>",
                styles: [""]
            }] }
];
/** @nocollapse */
CharactersHomeComponent.ctorParameters = () => [
    { type: CharactersLibService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CharactersProfileComponent {
    /**
     * @param {?} charactersLibService
     */
    constructor(charactersLibService) {
        this.charactersLibService = charactersLibService;
        this.current = this.charactersLibService.current;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.current);
    }
}
CharactersProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'characters-profile',
                template: "<ng-container *ngIf=\"(current | async) as profile; else loading\">\n<mat-card class=\"dashboard-card\">\n  <mat-card-header>\n    <mat-card-title>\n      {{profile.name}}\n      <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item>Expand</button>\n        <button mat-menu-item>Remove</button>\n      </mat-menu>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"dashboard-card-content\">\n    <ul>\n      <li>{{ profile.birth_year }}</li>\n      <li>{{ profile.gender }}</li>\n      <li>{{ profile.hair_color }}</li>\n      <li>{{ profile.skin_color }}</li>\n      <li>{{ profile.species }}</li>\n    </ul>\n  </mat-card-content>\n</mat-card>\n</ng-container>\n<ng-template #loading>Profile loading...</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CharactersProfileComponent.ctorParameters = () => [
    { type: CharactersLibService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CharactersCollectionComponent {
    /**
     * @param {?} router
     * @param {?} breakpointObserver
     * @param {?} charactersLibService
     */
    constructor(router, breakpointObserver, charactersLibService) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.charactersLibService = charactersLibService;
        this.characters = this.charactersLibService.characters;
        /** Based on the screen size, switch from standard to one column per row */
        this.cols = this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (result.breakpoints[Breakpoints.XSmall]) {
                return 1;
            }
            if (result.breakpoints[Breakpoints.Small]) {
                return 2;
            }
            if (result.breakpoints[Breakpoints.Medium]) {
                return 3;
            }
            if (result.breakpoints[Breakpoints.Large]) {
                return 4;
            }
            if (result.breakpoints[Breakpoints.XLarge]) {
                return 5;
            }
        })));
    }
    /**
     * @param {?} card
     * @return {?}
     */
    viewCharacter(card) {
        this.charactersLibService.setCurrent(card);
        this.router.navigate(['profile']);
    }
}
CharactersCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'characters-collection',
                template: "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Characters</h1>\n  <mat-grid-list cols=\"{{cols | async}}\" rowHeight=\"380px\">\n    <mat-grid-tile *ngFor=\"let card of characters | async\" [colspan]=\"1\" [rowspan]=\"1\">\n      <mat-card class=\"dashboard-card\" (click)=\"viewCharacter(card)\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.name}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <ul>\n            <li>{{ card.birth_year }}</li>\n            <li>{{ card.gender }}</li>\n            <li>{{ card.hair_color }}</li>\n            <li>{{ card.skin_color }}</li>\n            <li>{{ card.species }}</li>\n          </ul>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n",
                styles: [".grid-container{margin:30px}.dashboard-card{position:absolute;width:250px;height:350px;top:15px;left:15px;right:15px;bottom:15px}.more-button{position:absolute;top:5px;right:10px}.dashboard-card-content{text-align:center}"]
            }] }
];
/** @nocollapse */
CharactersCollectionComponent.ctorParameters = () => [
    { type: Router },
    { type: BreakpointObserver },
    { type: CharactersLibService }
];
CharactersCollectionComponent.propDecorators = {
    characters: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Use APP_INITIALIZER to load default config/projects before initializing.
// e.g. https://stackblitz.com/edit/angular-app-initializer-load-config-mng
// Note: Service function supplying defaults must return a Promise.
// See: https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9
// Export function for useFactory, as Arrow functions (Lambda) not supported.
// See: https://github.com/angular/angular/issues/23629
// Also add @dynamic or use variable to return Service function.
// See: https://github.com/angular/angular/issues/19698#issuecomment-338340211
/**
 * @param {?} chrSrv
 * @return {?}
 */
function loadCharacters(chrSrv) {
    // const init = () => prjSrv.init(); // Original arrow function for provider.
    // Arrow function not necessary once removed from providers seciton below.
    /** @type {?} */
    const init = (/**
     * @return {?}
     */
    function () {
        console.log('Initializing Versed');
        return chrSrv.init();
    });
    return init;
}
class CharactersLibModule {
}
CharactersLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CharactersHomeComponent,
                    CharactersProfileComponent,
                    CharactersCollectionComponent
                ],
                imports: [
                    CommonModule,
                    WebStorageModule,
                    FormsLibModule,
                    SharedLibModule,
                    LayoutModule,
                    MatToolbarModule,
                    MatButtonModule,
                    MatSidenavModule,
                    MatIconModule,
                    MatListModule,
                    MatGridListModule,
                    MatCardModule,
                    MatMenuModule
                ],
                exports: [
                    CharactersHomeComponent,
                    CharactersProfileComponent,
                    CharactersCollectionComponent,
                    FormsLibModule
                ],
                providers: [CharactersLibService,
                    {
                        provide: APP_INITIALIZER,
                        useFactory: loadCharacters,
                        deps: [CharactersLibService],
                        multi: true
                    }],
                entryComponents: []
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

export { CharactersLibService, CharactersHomeComponent, CharactersProfileComponent, CharactersCollectionComponent, loadCharacters, CharactersLibModule };

//# sourceMappingURL=characters-lib.js.map