/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-store';
import { DatasetsLibService } from 'datasets-lib';
import { UuidService } from 'shared-lib';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './models/character.model';
import * as i0 from "@angular/core";
import * as i1 from "ngx-store";
import * as i2 from "shared-lib";
import * as i3 from "datasets-lib";
var CharactersLibService = /** @class */ (function () {
    function CharactersLibService(localStorageService, uuidService, datasetService) {
        this.localStorageService = localStorageService;
        this.uuidService = uuidService;
        this.datasetService = datasetService;
        this.initialized = false;
        this.charactersStream = new BehaviorSubject(null);
        this.currentStream = new BehaviorSubject(null);
    }
    Object.defineProperty(CharactersLibService.prototype, "characters", {
        get: /**
         * @return {?}
         */
        function () {
            return this.charactersStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} charactersArray
     * @return {?}
     */
    CharactersLibService.prototype.setCharacters = /**
     * @private
     * @param {?} charactersArray
     * @return {?}
     */
    function (charactersArray) {
        this.charactersStream.next(charactersArray);
        this.localStorageService.set('characters', charactersArray);
    };
    /**
     * @param {?=} character
     * @return {?}
     */
    CharactersLibService.prototype.getCharacter = /**
     * @param {?=} character
     * @return {?}
     */
    function (character) {
        if (!character) {
            return this.charactersStream.pipe(map((/**
             * @param {?} chrs
             * @return {?}
             */
            function (chrs) { return chrs[0]; })));
        }
        return this.charactersStream.pipe(map((/**
         * @param {?} chrs
         * @return {?}
         */
        function (chrs) { return chrs.find((/**
         * @param {?} chr
         * @return {?}
         */
        function (chr) { return chr.uuid === character.uuid; })); })));
    };
    /**
     * @param {?} uuid
     * @return {?}
     */
    CharactersLibService.prototype.getCharacterById = /**
     * @param {?} uuid
     * @return {?}
     */
    function (uuid) {
        return this.charactersStream.pipe(map((/**
         * @param {?} chrs
         * @return {?}
         */
        function (chrs) { return chrs.find((/**
         * @param {?} chr
         * @return {?}
         */
        function (chr) { return chr.uuid === uuid; })); })));
    };
    Object.defineProperty(CharactersLibService.prototype, "current", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} character
     * @return {?}
     */
    CharactersLibService.prototype.setCurrent = /**
     * @param {?} character
     * @return {?}
     */
    function (character) {
        this.currentStream.next(character);
        this.localStorageService.set('currentCharacter', character);
    };
    /**
     * @return {?}
     */
    CharactersLibService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    CharactersLibService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.initialized) {
            this.loadCharacters();
            this.initialized = true;
        }
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            resolve(_this.initialized);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CharactersLibService.prototype.loadCharacters = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var charactersObs = this.datasetService.getCharacters();
        /** @type {?} */
        var chrArray;
        charactersObs.subscribe((/**
         * @param {?} chrs
         * @return {?}
         */
        function (chrs) {
            chrArray = chrs;
            console.log(chrArray);
            _this.setCharacters(chrArray);
            _this.loadCurrent();
            console.log('Characters loaded from SwAPI.co!');
        }));
    };
    /**
     * @private
     * @return {?}
     */
    CharactersLibService.prototype.loadCurrent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var chr = this.localStorageService.get('current');
        if (!chr) {
            console.log('No current character in LocalStorage.');
            this.characters.subscribe((/**
             * @param {?} chrs
             * @return {?}
             */
            function (chrs) { return chr = chrs[0]; }));
        }
        this.setCurrent(chr);
        console.log('Current set to: ', chr.title);
    };
    /**
     * @return {?}
     */
    CharactersLibService.prototype.createCharacter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var chr = new Character();
        chr.uuid = this.uuidService.generate();
        return chr;
    };
    /**
     * @param {?} charactersArray
     * @return {?}
     */
    CharactersLibService.prototype.addCharacters = /**
     * @param {?} charactersArray
     * @return {?}
     */
    function (charactersArray) {
        var e_1, _a;
        console.log('adding chrs: ', charactersArray);
        try {
            for (var charactersArray_1 = tslib_1.__values(charactersArray), charactersArray_1_1 = charactersArray_1.next(); !charactersArray_1_1.done; charactersArray_1_1 = charactersArray_1.next()) {
                var chr = charactersArray_1_1.value;
                this.uuidService.cache(chr.uuid);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (charactersArray_1_1 && !charactersArray_1_1.done && (_a = charactersArray_1.return)) _a.call(charactersArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.setCharacters(charactersArray);
    };
    /**
     * @param {?} character
     * @return {?}
     */
    CharactersLibService.prototype.addCharacter = /**
     * @param {?} character
     * @return {?}
     */
    function (character) {
        this.uuidService.cache(character.uuid);
        /** @type {?} */
        var charactersArray = tslib_1.__spread(this.charactersStream.getValue(), [character]);
        this.setCharacters(charactersArray);
    };
    /**
     * @param {?} character
     * @return {?}
     */
    CharactersLibService.prototype.updateCharacter = /**
     * @param {?} character
     * @return {?}
     */
    function (character) {
        /** @type {?} */
        var charactersArray = tslib_1.__spread(this.charactersStream.getValue());
        /** @type {?} */
        var index = charactersArray.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.uuid === character.uuid; }));
        charactersArray.splice(index, 1, character);
        this.setCharacters(charactersArray);
    };
    /**
     * @param {?} character
     * @return {?}
     */
    CharactersLibService.prototype.deleteCharacter = /**
     * @param {?} character
     * @return {?}
     */
    function (character) {
        /** @type {?} */
        var charactersArray = this.charactersStream.getValue().filter((/**
         * @param {?} chr
         * @return {?}
         */
        function (chr) { return chr.uuid !== character.uuid; }));
        this.uuidService.release(character.uuid);
        // If deleting character leaves Characters empty, create and add new default character.
        if (!charactersArray.length) {
            /** @type {?} */
            var chr = this.createCharacter();
            charactersArray.push(chr);
        }
        this.setCharacters(charactersArray);
        // If current, set to first in characters list.
        /** @type {?} */
        var currentUuid;
        this.current.subscribe((/**
         * @param {?} curr
         * @return {?}
         */
        function (curr) { return currentUuid = curr.uuid; }));
        if (character.uuid === currentUuid) {
            /** @type {?} */
            var chr_1;
            this.characters.subscribe((/**
             * @param {?} chrs
             * @return {?}
             */
            function (chrs) { return chr_1 = chrs[0]; }));
            this.setCurrent(chr_1);
        }
    };
    CharactersLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CharactersLibService.ctorParameters = function () { return [
        { type: LocalStorageService },
        { type: UuidService },
        { type: DatasetsLibService }
    ]; };
    /** @nocollapse */ CharactersLibService.ngInjectableDef = i0.defineInjectable({ factory: function CharactersLibService_Factory() { return new CharactersLibService(i0.inject(i1.LocalStorageService), i0.inject(i2.UuidService), i0.inject(i3.DatasetsLibService)); }, token: CharactersLibService, providedIn: "root" });
    return CharactersLibService;
}());
export { CharactersLibService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CharactersLibService.prototype.charactersStream;
    /**
     * @type {?}
     * @private
     */
    CharactersLibService.prototype.currentStream;
    /**
     * @type {?}
     * @private
     */
    CharactersLibService.prototype.initialized;
    /** @type {?} */
    CharactersLibService.prototype.localStorageService;
    /** @type {?} */
    CharactersLibService.prototype.uuidService;
    /**
     * @type {?}
     * @private
     */
    CharactersLibService.prototype.datasetService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NoYXJhY3RlcnMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV6QyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBRXJEO0lBU0UsOEJBQ1MsbUJBQXdDLEVBQ3hDLFdBQXdCLEVBQ3ZCLGNBQWtDO1FBRm5DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBRTFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBYyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFZLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxzQkFBVyw0Q0FBVTs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLENBQUM7OztPQUFBOzs7Ozs7SUFDTyw0Q0FBYTs7Ozs7SUFBckIsVUFBc0IsZUFBZTtRQUNuQyxJQUFJLENBQUMsZ0JBQWdC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QSxLQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsRUFBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBRyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOztnQkFuSUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFWUSxtQkFBbUI7Z0JBRW5CLFdBQVc7Z0JBRFgsa0JBQWtCOzs7K0JBRjNCO0NBOElDLEFBcklELElBcUlDO1NBaklZLG9CQUFvQjs7Ozs7O0lBQy9CLGdEQUF1RDs7Ozs7SUFDdkQsNkNBQWtEOzs7OztJQUNsRCwyQ0FBNkI7O0lBRzNCLG1EQUErQzs7SUFDL0MsMkNBQStCOzs7OztJQUMvQiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZ3gtc3RvcmUnO1xuaW1wb3J0IHsgRGF0YXNldHNMaWJTZXJ2aWNlIH0gZnJvbSAnZGF0YXNldHMtbGliJztcbmltcG9ydCB7IFV1aWRTZXJ2aWNlIH0gZnJvbSAnc2hhcmVkLWxpYic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9tb2RlbHMvY2hhcmFjdGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyc0xpYlNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGNoYXJhY3RlcnNTdHJlYW06IEJlaGF2aW9yU3ViamVjdDxDaGFyYWN0ZXJbXT47XG4gIHByaXZhdGUgY3VycmVudFN0cmVhbTogQmVoYXZpb3JTdWJqZWN0PENoYXJhY3Rlcj47XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgcHVibGljIHV1aWRTZXJ2aWNlOiBVdWlkU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFzZXRTZXJ2aWNlOiBEYXRhc2V0c0xpYlNlcnZpY2VcbiAgICApIHtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5jaGFyYWN0ZXJzU3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFyYWN0ZXJbXT4obnVsbCk7XG4gICAgdGhpcy5jdXJyZW50U3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFyYWN0ZXI+KG51bGwpO1xuICB9XG5cbiAgcHVibGljIGdldCBjaGFyYWN0ZXJzKCk6IE9ic2VydmFibGU8Q2hhcmFjdGVyW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzU3RyZWFtLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHByaXZhdGUgc2V0Q2hhcmFjdGVycyhjaGFyYWN0ZXJzQXJyYXkpIHtcbiAgICB0aGlzLmNoYXJhY3RlcnNTdHJlYW0ubmV4dChjaGFyYWN0ZXJzQXJyYXkpO1xuICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2NoYXJhY3RlcnMnLCBjaGFyYWN0ZXJzQXJyYXkpO1xuICB9XG5cbiAgcHVibGljIGdldENoYXJhY3RlcihjaGFyYWN0ZXI/KTogT2JzZXJ2YWJsZTxDaGFyYWN0ZXI+IHtcbiAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyc1N0cmVhbS5waXBlKFxuICAgICAgICBtYXAoY2hycyA9PiBjaHJzWzBdKVxuICAgICAgKTtcbiAgICAgIH1cbiAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzU3RyZWFtLnBpcGUoXG4gICAgICBtYXAoY2hycyA9PiBjaHJzLmZpbmQoY2hyID0+IGNoci51dWlkID09PSBjaGFyYWN0ZXIudXVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGFyYWN0ZXJCeUlkKHV1aWQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnNTdHJlYW0ucGlwZShcbiAgICAgIG1hcChjaHJzID0+IGNocnMuZmluZChjaHIgPT4gY2hyLnV1aWQgPT09IHV1aWQpKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnQoKTogT2JzZXJ2YWJsZTxDaGFyYWN0ZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RyZWFtLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHB1YmxpYyBzZXRDdXJyZW50KGNoYXJhY3RlcjogQ2hhcmFjdGVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50U3RyZWFtLm5leHQoY2hhcmFjdGVyKTtcbiAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdjdXJyZW50Q2hhcmFjdGVyJywgY2hhcmFjdGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMubG9hZENoYXJhY3RlcnMoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlKHRoaXMuaW5pdGlhbGl6ZWQpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbG9hZENoYXJhY3RlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2hhcmFjdGVyc09icyA9IHRoaXMuZGF0YXNldFNlcnZpY2UuZ2V0Q2hhcmFjdGVycygpO1xuICAgIGxldCBjaHJBcnJheTogYW55W107XG4gICAgY2hhcmFjdGVyc09icy5zdWJzY3JpYmUoY2hycyA9PiB7XG4gICAgICBjaHJBcnJheSA9IGNocnM7XG4gICAgICBjb25zb2xlLmxvZyhjaHJBcnJheSk7XG4gICAgICB0aGlzLnNldENoYXJhY3RlcnMoY2hyQXJyYXkpO1xuICAgICAgdGhpcy5sb2FkQ3VycmVudCgpO1xuICAgICAgY29uc29sZS5sb2coJ0NoYXJhY3RlcnMgbG9hZGVkIGZyb20gU3dBUEkuY28hJyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRDdXJyZW50KCk6IHZvaWQge1xuICAgIGxldCBjaHIgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdjdXJyZW50Jyk7XG4gICAgaWYgKCFjaHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBjdXJyZW50IGNoYXJhY3RlciBpbiBMb2NhbFN0b3JhZ2UuJyk7XG4gICAgICB0aGlzLmNoYXJhY3RlcnMuc3Vic2NyaWJlKGNocnMgPT4gY2hyID0gY2hyc1swXSk7XG4gICAgfVxuICAgIHRoaXMuc2V0Q3VycmVudChjaHIpO1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IHNldCB0bzogJywgY2hyLnRpdGxlKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDaGFyYWN0ZXIoKTogQ2hhcmFjdGVyIHtcbiAgICBjb25zdCBjaHIgPSBuZXcgQ2hhcmFjdGVyKCk7XG4gICAgY2hyLnV1aWQgPSB0aGlzLnV1aWRTZXJ2aWNlLmdlbmVyYXRlKCk7XG4gICAgcmV0dXJuIGNocjtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGFyYWN0ZXJzKGNoYXJhY3RlcnNBcnJheSkge1xuICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgY2hyczogJywgY2hhcmFjdGVyc0FycmF5KTtcbiAgICBmb3IgKGNvbnN0IGNociBvZiBjaGFyYWN0ZXJzQXJyYXkpIHtcbiAgICAgIHRoaXMudXVpZFNlcnZpY2UuY2FjaGUoY2hyLnV1aWQpO1xuICAgIH1cbiAgICB0aGlzLnNldENoYXJhY3RlcnMoY2hhcmFjdGVyc0FycmF5KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGFyYWN0ZXIoY2hhcmFjdGVyOiBDaGFyYWN0ZXIpIHtcbiAgICB0aGlzLnV1aWRTZXJ2aWNlLmNhY2hlKGNoYXJhY3Rlci51dWlkKTtcbiAgICBjb25zdCBjaGFyYWN0ZXJzQXJyYXkgPSBbIC4uLnRoaXMuY2hhcmFjdGVyc1N0cmVhbS5nZXRWYWx1ZSgpLCBjaGFyYWN0ZXIgXTtcbiAgICB0aGlzLnNldENoYXJhY3RlcnMoY2hhcmFjdGVyc0FycmF5KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDaGFyYWN0ZXIoY2hhcmFjdGVyOiBDaGFyYWN0ZXIpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzQXJyYXkgPSBbIC4uLnRoaXMuY2hhcmFjdGVyc1N0cmVhbS5nZXRWYWx1ZSgpXTtcbiAgICBjb25zdCBpbmRleCA9IGNoYXJhY3RlcnNBcnJheS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT09IGNoYXJhY3Rlci51dWlkKTtcbiAgICBjaGFyYWN0ZXJzQXJyYXkuc3BsaWNlKGluZGV4LCAxLCBjaGFyYWN0ZXIpO1xuICAgIHRoaXMuc2V0Q2hhcmFjdGVycyhjaGFyYWN0ZXJzQXJyYXkpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZUNoYXJhY3RlcihjaGFyYWN0ZXI6IENoYXJhY3Rlcikge1xuICAgIGNvbnN0IGNoYXJhY3RlcnNBcnJheSA9IHRoaXMuY2hhcmFjdGVyc1N0cmVhbS5nZXRWYWx1ZSgpLmZpbHRlcihjaHIgPT4gY2hyLnV1aWQgIT09IGNoYXJhY3Rlci51dWlkKTtcbiAgICB0aGlzLnV1aWRTZXJ2aWNlLnJlbGVhc2UoY2hhcmFjdGVyLnV1aWQpO1xuXG4gICAgLy8gSWYgZGVsZXRpbmcgY2hhcmFjdGVyIGxlYXZlcyBDaGFyYWN0ZXJzIGVtcHR5LCBjcmVhdGUgYW5kIGFkZCBuZXcgZGVmYXVsdCBjaGFyYWN0ZXIuXG4gICAgaWYgKCFjaGFyYWN0ZXJzQXJyYXkubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaHIgPSB0aGlzLmNyZWF0ZUNoYXJhY3RlcigpO1xuICAgICAgY2hhcmFjdGVyc0FycmF5LnB1c2goY2hyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDaGFyYWN0ZXJzKGNoYXJhY3RlcnNBcnJheSk7XG5cbiAgICAvLyBJZiBjdXJyZW50LCBzZXQgdG8gZmlyc3QgaW4gY2hhcmFjdGVycyBsaXN0LlxuICAgIGxldCBjdXJyZW50VXVpZDogc3RyaW5nO1xuICAgIHRoaXMuY3VycmVudC5zdWJzY3JpYmUoY3VyciA9PiBjdXJyZW50VXVpZCA9IGN1cnIudXVpZCk7XG4gICAgaWYgKGNoYXJhY3Rlci51dWlkID09PSBjdXJyZW50VXVpZCkge1xuICAgICAgbGV0IGNocjogQ2hhcmFjdGVyO1xuICAgICAgdGhpcy5jaGFyYWN0ZXJzLnN1YnNjcmliZShjaHJzID0+IGNociA9IGNocnNbMF0pO1xuICAgICAgdGhpcy5zZXRDdXJyZW50KGNocik7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==