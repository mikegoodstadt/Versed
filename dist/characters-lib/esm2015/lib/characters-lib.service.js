/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class CharactersLibService {
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
/** @nocollapse */ CharactersLibService.ngInjectableDef = i0.defineInjectable({ factory: function CharactersLibService_Factory() { return new CharactersLibService(i0.inject(i1.LocalStorageService), i0.inject(i2.UuidService), i0.inject(i3.DatasetsLibService)); }, token: CharactersLibService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NoYXJhY3RlcnMtbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXpDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNckQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBSy9CLFlBQ1MsbUJBQXdDLEVBQ3hDLFdBQXdCLEVBQ3ZCLGNBQWtDO1FBRm5DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO1FBRTFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBYyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksZUFBZSxDQUFZLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBQ08sYUFBYSxDQUFDLGVBQWU7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFD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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZ3gtc3RvcmUnO1xuaW1wb3J0IHsgRGF0YXNldHNMaWJTZXJ2aWNlIH0gZnJvbSAnZGF0YXNldHMtbGliJztcbmltcG9ydCB7IFV1aWRTZXJ2aWNlIH0gZnJvbSAnc2hhcmVkLWxpYic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9tb2RlbHMvY2hhcmFjdGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyc0xpYlNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGNoYXJhY3RlcnNTdHJlYW06IEJlaGF2aW9yU3ViamVjdDxDaGFyYWN0ZXJbXT47XG4gIHByaXZhdGUgY3VycmVudFN0cmVhbTogQmVoYXZpb3JTdWJqZWN0PENoYXJhY3Rlcj47XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgcHVibGljIHV1aWRTZXJ2aWNlOiBVdWlkU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFzZXRTZXJ2aWNlOiBEYXRhc2V0c0xpYlNlcnZpY2VcbiAgICApIHtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5jaGFyYWN0ZXJzU3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFyYWN0ZXJbXT4obnVsbCk7XG4gICAgdGhpcy5jdXJyZW50U3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFyYWN0ZXI+KG51bGwpO1xuICB9XG5cbiAgcHVibGljIGdldCBjaGFyYWN0ZXJzKCk6IE9ic2VydmFibGU8Q2hhcmFjdGVyW10+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzU3RyZWFtLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHByaXZhdGUgc2V0Q2hhcmFjdGVycyhjaGFyYWN0ZXJzQXJyYXkpIHtcbiAgICB0aGlzLmNoYXJhY3RlcnNTdHJlYW0ubmV4dChjaGFyYWN0ZXJzQXJyYXkpO1xuICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2NoYXJhY3RlcnMnLCBjaGFyYWN0ZXJzQXJyYXkpO1xuICB9XG5cbiAgcHVibGljIGdldENoYXJhY3RlcihjaGFyYWN0ZXI/KTogT2JzZXJ2YWJsZTxDaGFyYWN0ZXI+IHtcbiAgICBpZiAoIWNoYXJhY3Rlcikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyc1N0cmVhbS5waXBlKFxuICAgICAgICBtYXAoY2hycyA9PiBjaHJzWzBdKVxuICAgICAgKTtcbiAgICAgIH1cbiAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzU3RyZWFtLnBpcGUoXG4gICAgICBtYXAoY2hycyA9PiBjaHJzLmZpbmQoY2hyID0+IGNoci51dWlkID09PSBjaGFyYWN0ZXIudXVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGFyYWN0ZXJCeUlkKHV1aWQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnNTdHJlYW0ucGlwZShcbiAgICAgIG1hcChjaHJzID0+IGNocnMuZmluZChjaHIgPT4gY2hyLnV1aWQgPT09IHV1aWQpKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnQoKTogT2JzZXJ2YWJsZTxDaGFyYWN0ZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RyZWFtLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHB1YmxpYyBzZXRDdXJyZW50KGNoYXJhY3RlcjogQ2hhcmFjdGVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50U3RyZWFtLm5leHQoY2hhcmFjdGVyKTtcbiAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdjdXJyZW50Q2hhcmFjdGVyJywgY2hhcmFjdGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMubG9hZENoYXJhY3RlcnMoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlKHRoaXMuaW5pdGlhbGl6ZWQpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbG9hZENoYXJhY3RlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2hhcmFjdGVyc09icyA9IHRoaXMuZGF0YXNldFNlcnZpY2UuZ2V0Q2hhcmFjdGVycygpO1xuICAgIGxldCBjaHJBcnJheTogYW55W107XG4gICAgY2hhcmFjdGVyc09icy5zdWJzY3JpYmUoY2hycyA9PiB7XG4gICAgICBjaHJBcnJheSA9IGNocnM7XG4gICAgICBjb25zb2xlLmxvZyhjaHJBcnJheSk7XG4gICAgICB0aGlzLnNldENoYXJhY3RlcnMoY2hyQXJyYXkpO1xuICAgICAgdGhpcy5sb2FkQ3VycmVudCgpO1xuICAgICAgY29uc29sZS5sb2coJ0NoYXJhY3RlcnMgbG9hZGVkIGZyb20gU3dBUEkuY28hJyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRDdXJyZW50KCk6IHZvaWQge1xuICAgIGxldCBjaHIgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdjdXJyZW50Jyk7XG4gICAgaWYgKCFjaHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBjdXJyZW50IGNoYXJhY3RlciBpbiBMb2NhbFN0b3JhZ2UuJyk7XG4gICAgICB0aGlzLmNoYXJhY3RlcnMuc3Vic2NyaWJlKGNocnMgPT4gY2hyID0gY2hyc1swXSk7XG4gICAgfVxuICAgIHRoaXMuc2V0Q3VycmVudChjaHIpO1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IHNldCB0bzogJywgY2hyLnRpdGxlKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDaGFyYWN0ZXIoKTogQ2hhcmFjdGVyIHtcbiAgICBjb25zdCBjaHIgPSBuZXcgQ2hhcmFjdGVyKCk7XG4gICAgY2hyLnV1aWQgPSB0aGlzLnV1aWRTZXJ2aWNlLmdlbmVyYXRlKCk7XG4gICAgcmV0dXJuIGNocjtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGFyYWN0ZXJzKGNoYXJhY3RlcnNBcnJheSkge1xuICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgY2hyczogJywgY2hhcmFjdGVyc0FycmF5KTtcbiAgICBmb3IgKGNvbnN0IGNociBvZiBjaGFyYWN0ZXJzQXJyYXkpIHtcbiAgICAgIHRoaXMudXVpZFNlcnZpY2UuY2FjaGUoY2hyLnV1aWQpO1xuICAgIH1cbiAgICB0aGlzLnNldENoYXJhY3RlcnMoY2hhcmFjdGVyc0FycmF5KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGFyYWN0ZXIoY2hhcmFjdGVyOiBDaGFyYWN0ZXIpIHtcbiAgICB0aGlzLnV1aWRTZXJ2aWNlLmNhY2hlKGNoYXJhY3Rlci51dWlkKTtcbiAgICBjb25zdCBjaGFyYWN0ZXJzQXJyYXkgPSBbIC4uLnRoaXMuY2hhcmFjdGVyc1N0cmVhbS5nZXRWYWx1ZSgpLCBjaGFyYWN0ZXIgXTtcbiAgICB0aGlzLnNldENoYXJhY3RlcnMoY2hhcmFjdGVyc0FycmF5KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDaGFyYWN0ZXIoY2hhcmFjdGVyOiBDaGFyYWN0ZXIpIHtcbiAgICBjb25zdCBjaGFyYWN0ZXJzQXJyYXkgPSBbIC4uLnRoaXMuY2hhcmFjdGVyc1N0cmVhbS5nZXRWYWx1ZSgpXTtcbiAgICBjb25zdCBpbmRleCA9IGNoYXJhY3RlcnNBcnJheS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnV1aWQgPT09IGNoYXJhY3Rlci51dWlkKTtcbiAgICBjaGFyYWN0ZXJzQXJyYXkuc3BsaWNlKGluZGV4LCAxLCBjaGFyYWN0ZXIpO1xuICAgIHRoaXMuc2V0Q2hhcmFjdGVycyhjaGFyYWN0ZXJzQXJyYXkpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZUNoYXJhY3RlcihjaGFyYWN0ZXI6IENoYXJhY3Rlcikge1xuICAgIGNvbnN0IGNoYXJhY3RlcnNBcnJheSA9IHRoaXMuY2hhcmFjdGVyc1N0cmVhbS5nZXRWYWx1ZSgpLmZpbHRlcihjaHIgPT4gY2hyLnV1aWQgIT09IGNoYXJhY3Rlci51dWlkKTtcbiAgICB0aGlzLnV1aWRTZXJ2aWNlLnJlbGVhc2UoY2hhcmFjdGVyLnV1aWQpO1xuXG4gICAgLy8gSWYgZGVsZXRpbmcgY2hhcmFjdGVyIGxlYXZlcyBDaGFyYWN0ZXJzIGVtcHR5LCBjcmVhdGUgYW5kIGFkZCBuZXcgZGVmYXVsdCBjaGFyYWN0ZXIuXG4gICAgaWYgKCFjaGFyYWN0ZXJzQXJyYXkubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjaHIgPSB0aGlzLmNyZWF0ZUNoYXJhY3RlcigpO1xuICAgICAgY2hhcmFjdGVyc0FycmF5LnB1c2goY2hyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDaGFyYWN0ZXJzKGNoYXJhY3RlcnNBcnJheSk7XG5cbiAgICAvLyBJZiBjdXJyZW50LCBzZXQgdG8gZmlyc3QgaW4gY2hhcmFjdGVycyBsaXN0LlxuICAgIGxldCBjdXJyZW50VXVpZDogc3RyaW5nO1xuICAgIHRoaXMuY3VycmVudC5zdWJzY3JpYmUoY3VyciA9PiBjdXJyZW50VXVpZCA9IGN1cnIudXVpZCk7XG4gICAgaWYgKGNoYXJhY3Rlci51dWlkID09PSBjdXJyZW50VXVpZCkge1xuICAgICAgbGV0IGNocjogQ2hhcmFjdGVyO1xuICAgICAgdGhpcy5jaGFyYWN0ZXJzLnN1YnNjcmliZShjaHJzID0+IGNociA9IGNocnNbMF0pO1xuICAgICAgdGhpcy5zZXRDdXJyZW50KGNocik7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==