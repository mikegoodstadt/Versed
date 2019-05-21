/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CharactersLibService } from '../../characters-lib.service';
export class CharactersProfileComponent {
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
if (false) {
    /** @type {?} */
    CharactersProfileComponent.prototype.current;
    /**
     * @type {?}
     * @private
     */
    CharactersProfileComponent.prototype.charactersLibService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hhcmFjdGVycy1wcm9maWxlL2NoYXJhY3RlcnMtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFRcEUsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUdyQyxZQUNVLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRWxELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUgsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsczdCQUFrRDs7YUFFbkQ7Ozs7WUFQUSxvQkFBb0I7Ozs7SUFTM0IsNkNBQXNDOzs7OztJQUdwQywwREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyc0xpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGFyYWN0ZXJzLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4uLy4uL21vZGVscy9jaGFyYWN0ZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGFyYWN0ZXJzLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcmFjdGVycy1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcmFjdGVycy1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyc1Byb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY3VycmVudDogT2JzZXJ2YWJsZTxDaGFyYWN0ZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhcmFjdGVyc0xpYlNlcnZpY2U6IENoYXJhY3RlcnNMaWJTZXJ2aWNlXG4gICAgKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jaGFyYWN0ZXJzTGliU2VydmljZS5jdXJyZW50O1xuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnQpO1xuICB9XG5cbn1cbiJdfQ==