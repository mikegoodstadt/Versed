/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { v5 as url2id } from 'uuid';
import * as i0 from "@angular/core";
/*
 * Adapted from https://stackoverflow.com/a/55365334/1667410
 */
export class UuidService {
    constructor() {
        this.idCache = [];
    }
    /**
     * @param {?=} url
     * @return {?}
     */
    generate(url) {
        /** @type {?} */
        let isUnique = false;
        /** @type {?} */
        let tempId = '';
        if (url) {
            tempId = url2id(url, url2id.URL);
        }
        else {
            tempId = uuid();
        }
        while (!isUnique) {
            if (!this.idExists(tempId)) {
                isUnique = true;
            }
        }
        // console.log(this.idCache);
        return tempId;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    cache(id) {
        this.idCache.push(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    release(id) {
        /** @type {?} */
        const index = this.idCache.indexOf(id);
        this.idCache.splice(index, 1);
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    idExists(id) {
        return this.idCache.includes(id);
    }
}
UuidService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UuidService.ctorParameters = () => [];
/** @nocollapse */ UuidService.ngInjectableDef = i0.defineInjectable({ factory: function UuidService_Factory() { return new UuidService(); }, token: UuidService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UuidService.prototype.idCache;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hhcmVkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi91dWlkL3V1aWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFTcEMsTUFBTSxPQUFPLFdBQVc7SUFHdEI7UUFGTyxZQUFPLEdBQWEsRUFBRSxDQUFDO0lBRWYsQ0FBQzs7Ozs7SUFFVCxRQUFRLENBQUMsR0FBUzs7WUFDbkIsUUFBUSxHQUFHLEtBQUs7O1lBQ2hCLE1BQU0sR0FBRyxFQUFFO1FBRWYsSUFBSSxHQUFHLEVBQUU7WUFDUCxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtRQUVELE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDakI7U0FDRjtRQUNELDZCQUE2QjtRQUM3QixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLEtBQUssQ0FBQyxFQUFVO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLEVBQVU7O2NBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxFQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBdENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUVDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHY1IGFzIHVybDJpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgVXJsIH0gZnJvbSAndXJsJztcblxuLypcbiAqIEFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTUzNjUzMzQvMTY2NzQxMFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXVpZFNlcnZpY2Uge1xuICBwdWJsaWMgaWRDYWNoZTogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGdlbmVyYXRlKHVybD86IFVybCk6IHN0cmluZyB7XG4gICAgbGV0IGlzVW5pcXVlID0gZmFsc2U7XG4gICAgbGV0IHRlbXBJZCA9ICcnO1xuXG4gICAgaWYgKHVybCkge1xuICAgICAgdGVtcElkID0gdXJsMmlkKHVybCwgdXJsMmlkLlVSTCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBJZCA9IHV1aWQoKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoIWlzVW5pcXVlKSB7XG4gICAgICBpZiAoIXRoaXMuaWRFeGlzdHModGVtcElkKSkge1xuICAgICAgICBpc1VuaXF1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaWRDYWNoZSk7XG4gICAgcmV0dXJuIHRlbXBJZDtcbiAgfVxuXG4gIHB1YmxpYyBjYWNoZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pZENhY2hlLnB1c2goaWQpO1xuICB9XG5cbiAgcHVibGljIHJlbGVhc2UoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pZENhY2hlLmluZGV4T2YoaWQpO1xuICAgIHRoaXMuaWRDYWNoZS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpZEV4aXN0cyhpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWRDYWNoZS5pbmNsdWRlcyhpZCk7XG4gIH1cblxufVxuIl19