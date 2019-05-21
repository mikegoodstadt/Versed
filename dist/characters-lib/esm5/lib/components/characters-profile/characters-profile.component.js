/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CharactersLibService } from '../../characters-lib.service';
var CharactersProfileComponent = /** @class */ (function () {
    function CharactersProfileComponent(charactersLibService) {
        this.charactersLibService = charactersLibService;
        this.current = this.charactersLibService.current;
    }
    /**
     * @return {?}
     */
    CharactersProfileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.current);
    };
    CharactersProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'characters-profile',
                    template: "<ng-container *ngIf=\"(current | async) as profile; else loading\">\n<mat-card class=\"dashboard-card\">\n  <mat-card-header>\n    <mat-card-title>\n      {{profile.name}}\n      <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item>Expand</button>\n        <button mat-menu-item>Remove</button>\n      </mat-menu>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content class=\"dashboard-card-content\">\n    <ul>\n      <li>{{ profile.birth_year }}</li>\n      <li>{{ profile.gender }}</li>\n      <li>{{ profile.hair_color }}</li>\n      <li>{{ profile.skin_color }}</li>\n      <li>{{ profile.species }}</li>\n    </ul>\n  </mat-card-content>\n</mat-card>\n</ng-container>\n<ng-template #loading>Profile loading...</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CharactersProfileComponent.ctorParameters = function () { return [
        { type: CharactersLibService }
    ]; };
    return CharactersProfileComponent;
}());
export { CharactersProfileComponent };
if (false) {
    /** @type {?} */
    CharactersProfileComponent.prototype.current;
    /**
     * @type {?}
     * @private
     */
    CharactersProfileComponent.prototype.charactersLibService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hhcmFjdGVycy1wcm9maWxlL2NoYXJhY3RlcnMtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHcEU7SUFRRSxvQ0FDVSxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUVsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQzs7OztJQUVILDZDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsczdCQUFrRDs7aUJBRW5EOzs7O2dCQVBRLG9CQUFvQjs7SUFxQjdCLGlDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSwwQkFBMEI7OztJQUNyQyw2Q0FBc0M7Ozs7O0lBR3BDLDBEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzTGliU2VydmljZSB9IGZyb20gJy4uLy4uL2NoYXJhY3RlcnMtbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoYXJhY3Rlci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoYXJhY3RlcnMtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFyYWN0ZXJzLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFyYWN0ZXJzLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJzUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjdXJyZW50OiBPYnNlcnZhYmxlPENoYXJhY3Rlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJzTGliU2VydmljZTogQ2hhcmFjdGVyc0xpYlNlcnZpY2VcbiAgICApIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmNoYXJhY3RlcnNMaWJTZXJ2aWNlLmN1cnJlbnQ7XG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudCk7XG4gIH1cblxufVxuIl19