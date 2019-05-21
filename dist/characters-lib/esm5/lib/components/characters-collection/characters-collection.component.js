/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CharactersLibService } from '../../characters-lib.service';
var CharactersCollectionComponent = /** @class */ (function () {
    function CharactersCollectionComponent(router, breakpointObserver, charactersLibService) {
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
        function (result) {
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
    CharactersCollectionComponent.prototype.viewCharacter = /**
     * @param {?} card
     * @return {?}
     */
    function (card) {
        this.charactersLibService.setCurrent(card);
        this.router.navigate(['profile']);
    };
    CharactersCollectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'characters-collection',
                    template: "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Characters</h1>\n  <mat-grid-list cols=\"{{cols | async}}\" rowHeight=\"380px\">\n    <mat-grid-tile *ngFor=\"let card of characters | async\" [colspan]=\"1\" [rowspan]=\"1\">\n      <mat-card class=\"dashboard-card\" (click)=\"viewCharacter(card)\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.name}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <ul>\n            <li>{{ card.birth_year }}</li>\n            <li>{{ card.gender }}</li>\n            <li>{{ card.hair_color }}</li>\n            <li>{{ card.skin_color }}</li>\n            <li>{{ card.species }}</li>\n          </ul>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n",
                    styles: [".grid-container{margin:30px}.dashboard-card{position:absolute;width:250px;height:350px;top:15px;left:15px;right:15px;bottom:15px}.more-button{position:absolute;top:5px;right:10px}.dashboard-card-content{text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    CharactersCollectionComponent.ctorParameters = function () { return [
        { type: Router },
        { type: BreakpointObserver },
        { type: CharactersLibService }
    ]; };
    CharactersCollectionComponent.propDecorators = {
        characters: [{ type: Input }]
    };
    return CharactersCollectionComponent;
}());
export { CharactersCollectionComponent };
if (false) {
    /** @type {?} */
    CharactersCollectionComponent.prototype.characters;
    /** @type {?} */
    CharactersCollectionComponent.prototype.cols;
    /**
     * @type {?}
     * @private
     */
    CharactersCollectionComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CharactersCollectionComponent.prototype.breakpointObserver;
    /**
     * @type {?}
     * @private
     */
    CharactersCollectionComponent.prototype.charactersLibService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1jb2xsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hhcmFjdGVycy1jb2xsZWN0aW9uL2NoYXJhY3RlcnMtY29sbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHcEU7SUFTRSx1Q0FDVSxNQUFjLEVBQ2Qsa0JBQXNDLEVBQ3RDLG9CQUEwQztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRWxELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztRQUV2RCwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQzFDLFdBQVcsQ0FBQyxNQUFNO1lBQ2xCLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxNQUFNO1lBQ2xCLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxNQUFNO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQ1AsR0FBRzs7OztRQUFDLFVBQUMsTUFBTTtZQUNULElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6QyxPQUFPLENBQUMsQ0FBQzthQUNWO1lBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxDQUFDLENBQUM7YUFDVjtZQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0scURBQWE7Ozs7SUFBcEIsVUFBcUIsSUFBZTtRQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDB0Q0FBcUQ7O2lCQUV0RDs7OztnQkFYUSxNQUFNO2dCQUdPLGtCQUFrQjtnQkFDL0Isb0JBQW9COzs7NkJBUzFCLEtBQUs7O0lBMkNSLG9DQUFDO0NBQUEsQUFqREQsSUFpREM7U0E1Q1ksNkJBQTZCOzs7SUFDeEMsbURBQXVDOztJQUN2Qyw2Q0FBZ0M7Ozs7O0lBRzlCLCtDQUFzQjs7Ozs7SUFDdEIsMkRBQThDOzs7OztJQUM5Qyw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMsIEJyZWFrcG9pbnRPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyc0xpYlNlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGFyYWN0ZXJzLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4uLy4uL21vZGVscy9jaGFyYWN0ZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGFyYWN0ZXJzLWNvbGxlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcmFjdGVycy1jb2xsZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcmFjdGVycy1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyc0NvbGxlY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBjaGFyYWN0ZXJzOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgcHVibGljIGNvbHM6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJzTGliU2VydmljZTogQ2hhcmFjdGVyc0xpYlNlcnZpY2VcbiAgICApIHtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSB0aGlzLmNoYXJhY3RlcnNMaWJTZXJ2aWNlLmNoYXJhY3RlcnM7XG5cbiAgICAvKiogQmFzZWQgb24gdGhlIHNjcmVlbiBzaXplLCBzd2l0Y2ggZnJvbSBzdGFuZGFyZCB0byBvbmUgY29sdW1uIHBlciByb3cgKi9cbiAgICB0aGlzLmNvbHMgPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICAgICAgQnJlYWtwb2ludHMuTGFyZ2UsXG4gICAgICBCcmVha3BvaW50cy5YTGFyZ2VcbiAgICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LmJyZWFrcG9pbnRzW0JyZWFrcG9pbnRzLlhTbWFsbF0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LmJyZWFrcG9pbnRzW0JyZWFrcG9pbnRzLlNtYWxsXSkge1xuICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYnJlYWtwb2ludHNbQnJlYWtwb2ludHMuTWVkaXVtXSkge1xuICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYnJlYWtwb2ludHNbQnJlYWtwb2ludHMuTGFyZ2VdKSB7XG4gICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5icmVha3BvaW50c1tCcmVha3BvaW50cy5YTGFyZ2VdKSB7XG4gICAgICAgICAgcmV0dXJuIDU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB2aWV3Q2hhcmFjdGVyKGNhcmQ6IENoYXJhY3Rlcikge1xuICAgIHRoaXMuY2hhcmFjdGVyc0xpYlNlcnZpY2Uuc2V0Q3VycmVudChjYXJkKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3Byb2ZpbGUnXSk7XG4gIH1cblxufVxuIl19