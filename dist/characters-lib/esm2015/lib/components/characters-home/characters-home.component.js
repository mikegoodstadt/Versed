/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CharactersLibService } from '../../characters-lib.service';
export class CharactersHomeComponent {
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
if (false) {
    /** @type {?} */
    CharactersHomeComponent.prototype.characters;
    /**
     * @type {?}
     * @private
     */
    CharactersHomeComponent.prototype._current;
    /**
     * @type {?}
     * @private
     */
    CharactersHomeComponent.prototype.charactersService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hhcmFjdGVycy1ob21lL2NoYXJhY3RlcnMtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFRcEUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUlsQyxZQUNVLGlCQUF1QztRQUF2QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXNCO1FBRS9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVGLFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQVcsT0FBTyxDQUFDLFNBQWM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUF2QkgsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDJEQUErQzs7YUFFaEQ7Ozs7WUFQUSxvQkFBb0I7Ozs7SUFTM0IsNkNBQTJDOzs7OztJQUMzQywyQ0FBd0M7Ozs7O0lBR3RDLG9EQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzTGliU2VydmljZSB9IGZyb20gJy4uLy4uL2NoYXJhY3RlcnMtbGliLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoYXJhY3Rlci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoYXJhY3RlcnMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFyYWN0ZXJzLWhvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFyYWN0ZXJzLWhvbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJzSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaGFyYWN0ZXJzOiBPYnNlcnZhYmxlPENoYXJhY3RlcltdPjtcbiAgcHJpdmF0ZSBfY3VycmVudDogT2JzZXJ2YWJsZTxDaGFyYWN0ZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhcmFjdGVyc1NlcnZpY2U6IENoYXJhY3RlcnNMaWJTZXJ2aWNlXG4gICApIHtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSB0aGlzLmNoYXJhY3RlcnNTZXJ2aWNlLmNoYXJhY3RlcnM7XG4gICAgdGhpcy5fY3VycmVudCA9IHRoaXMuY2hhcmFjdGVyc1NlcnZpY2UuY3VycmVudDtcbiAgIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIGdldCBjdXJyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gICB9XG4gICBwdWJsaWMgc2V0IGN1cnJlbnQoY2hhcmFjdGVyOiBhbnkpIHtcbiAgICAgdGhpcy5jaGFyYWN0ZXJzU2VydmljZS5zZXRDdXJyZW50KGNoYXJhY3Rlcik7XG4gICB9XG5cbn1cbiJdfQ==