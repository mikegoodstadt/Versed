/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CharactersLibService } from '../../characters-lib.service';
var CharactersHomeComponent = /** @class */ (function () {
    function CharactersHomeComponent(charactersService) {
        this.charactersService = charactersService;
        this.characters = this.charactersService.characters;
        this._current = this.charactersService.current;
    }
    /**
     * @return {?}
     */
    CharactersHomeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    Object.defineProperty(CharactersHomeComponent.prototype, "current", {
        get: /**
         * @return {?}
         */
        function () {
            return this._current;
        },
        set: /**
         * @param {?} character
         * @return {?}
         */
        function (character) {
            this.charactersService.setCurrent(character);
        },
        enumerable: true,
        configurable: true
    });
    CharactersHomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'characters-home',
                    template: "<characters-collection></characters-collection>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CharactersHomeComponent.ctorParameters = function () { return [
        { type: CharactersLibService }
    ]; };
    return CharactersHomeComponent;
}());
export { CharactersHomeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hhcmFjdGVycy1ob21lL2NoYXJhY3RlcnMtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHcEU7SUFTRSxpQ0FDVSxpQkFBdUM7UUFBdkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFzQjtRQUUvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRiwwQ0FBUTs7O0lBQVIsY0FBWSxDQUFDO0lBRWIsc0JBQVcsNENBQU87Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUFtQixTQUFjO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BSEE7O2dCQXBCSCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMkRBQStDOztpQkFFaEQ7Ozs7Z0JBUFEsb0JBQW9COztJQTRCN0IsOEJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXBCWSx1QkFBdUI7OztJQUNsQyw2Q0FBMkM7Ozs7O0lBQzNDLDJDQUF3Qzs7Ozs7SUFHdEMsb0RBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoYXJhY3RlcnNMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2hhcmFjdGVycy1saWIuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hhcmFjdGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hhcmFjdGVycy1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJhY3RlcnMtaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXJhY3RlcnMtaG9tZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXJhY3RlcnNIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNoYXJhY3RlcnM6IE9ic2VydmFibGU8Q2hhcmFjdGVyW10+O1xuICBwcml2YXRlIF9jdXJyZW50OiBPYnNlcnZhYmxlPENoYXJhY3Rlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJzU2VydmljZTogQ2hhcmFjdGVyc0xpYlNlcnZpY2VcbiAgICkge1xuICAgIHRoaXMuY2hhcmFjdGVycyA9IHRoaXMuY2hhcmFjdGVyc1NlcnZpY2UuY2hhcmFjdGVycztcbiAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5jaGFyYWN0ZXJzU2VydmljZS5jdXJyZW50O1xuICAgfVxuXG4gIG5nT25Jbml0KCkge31cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcbiAgIH1cbiAgIHB1YmxpYyBzZXQgY3VycmVudChjaGFyYWN0ZXI6IGFueSkge1xuICAgICB0aGlzLmNoYXJhY3RlcnNTZXJ2aWNlLnNldEN1cnJlbnQoY2hhcmFjdGVyKTtcbiAgIH1cblxufVxuIl19